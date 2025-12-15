import { useState } from 'react'
import { CircleAlert, CircleCheckBig } from 'lucide-react'
import { useHrnetModal } from '@aalexandree-g/hrnet-modal'

/**
 * Custom React hook managing the feedback modal displayed during
 * the employee creation process.
 *
 * It combines:
 * - the generic modal state (open/close) from the external plugin hook `useHrnetModal`
 * - and the HRnet-specific content (icons, messages, variants) defined here.
 *
 * @returns {Object} An object containing:
 *
 * // ────────────────────────────────
 * // Modal state
 * // ────────────────────────────────
 * @property {Object} modalConfig - Current configuration of the modal.
 * @property {boolean} modalConfig.isOpen - Indicates whether the modal is visible.
 * @property {JSX.Element|string} modalConfig.title - Icon or title displayed in the modal header.
 * @property {JSX.Element|string} modalConfig.message - Message displayed inside the modal.
 * @property {'success'|'error'} modalConfig.variant - Determines the modal's visual style.
 *
 * // ────────────────────────────────
 * // Modal actions
 * // ────────────────────────────────
 * @property {Function} showError - Opens the modal with a predefined error message.
 *
 * @property {Function} showSuccess - Opens the modal with a message based on the new employee.
 * @param {string} showSuccess.firstName - First name of the employee that was created.
 * @param {string} showSuccess.lastName - Last name of the employee that was created.
 *
 * @property {Function} closeModal - Closes the currently open modal.
 */
export const useEmployeeModal = () => {
  const { isOpen, open, close } = useHrnetModal()

  const [modalConfig, setModalConfig] = useState({
    title: '',
    message: '',
    variant: 'success',
  })

  const showError = () => {
    setModalConfig({
      title: <CircleAlert size={50} />,
      message: 'Please fill in all fields correctly.',
      variant: 'error',
    })
    open()
  }

  const showSuccess = (firstName, lastName) => {
    setModalConfig({
      title: <CircleCheckBig size={50} />,
      message: (
        <>
          <strong>
            {firstName} {lastName}
          </strong>
          <br />
          has been added to the company directory.
        </>
      ),
      variant: 'success',
    })
    open()
  }

  const closeModal = () => {
    close()
  }

  return {
    modalConfig: {
      ...modalConfig,
      isOpen,
    },
    showError,
    showSuccess,
    closeModal,
  }
}
