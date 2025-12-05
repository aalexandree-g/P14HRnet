import Modal from 'react-modal'

/**
 * UiModal component.
 *
 * Renders a customizable modal window using `react-modal`.
 * Displays a title, a message and an action button, and supports
 * different visual styles based on the `variant` prop.
 *
 * The modal can be closed by clicking outside, pressing ESC,
 * or clicking the "Ok" button.
 *
 * @component
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Whether the modal is currently visible.
 * @param {string|JSX.Element} props.title - Title displayed at the top of the modal (can include icons).
 * @param {string|JSX.Element} props.message - Optional message displayed under the title.
 * @param {"success"|"error"} [props.variant="success"] - Visual styling of the modal.
 * @param {Function} props.onClose - Callback fired when the modal requests to close.
 *
 * @returns {JSX.Element} A styled modal component.
 */
const UiModal = ({ isOpen, title, message, variant = 'success', onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className={`modal modal--${variant}`}
      contentLabel={'Employee creation feedback'}
    >
      <h2 className="modal__title">{title}</h2>
      {message && <p className="modal__message">{message}</p>}
      <button className="modal__button" onClick={onClose}>
        Ok
      </button>
    </Modal>
  )
}

export default UiModal
