import { useState } from 'react'
import { CircleAlert, CircleCheckBig } from 'lucide-react'

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
