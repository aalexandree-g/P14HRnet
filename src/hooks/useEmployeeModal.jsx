import { useState } from 'react'
import { CircleAlert, CircleCheckBig } from 'lucide-react'

/**
 * Custom React hook managing the feedback modal displayed during
 * the employee creation process.
 *
 * It handles the modal's open/close state, visual variant (success or error),
 * and dynamically built messages (especially after successful employee creation).
 *
 * @returns {Object} An object containing:
 *
 * // ────────────────────────────────
 * // Modal state
 * // ────────────────────────────────
 * @property {Object} modalConfig - Current configuration of the modal.
 * @property {boolean} modalConfig.isOpen - Indicates whether the modal is visible.
 * @property {JSX.Element|string} modalConfig.title - Icon displayed in the modal header.
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
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    variant: 'success',
  })

  const showError = () => {
    setModalConfig({
      isOpen: true,
      title: <CircleAlert size={50} />,
      message: 'Please fill in all fields correctly.',
      variant: 'error',
    })
  }

  const showSuccess = (firstName, lastName) => {
    setModalConfig({
      isOpen: true,
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
  }

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }))
  }

  return {
    modalConfig,
    showError,
    showSuccess,
    closeModal,
  }
}
