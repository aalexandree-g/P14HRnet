import Modal from 'react-modal'

const UiModal = ({ isOpen, title, message, variant = 'success', onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className={`modal modal--${variant}`}
      contentLabel={title}
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
