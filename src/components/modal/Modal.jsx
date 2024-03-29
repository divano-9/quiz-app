import { useContext, useRef, useEffect } from "react";
import { Context } from "../../states/GlobalContext";
import PropTypes from "prop-types";

const Modal = ({ hasCloseBtn = true, children }) => {
  Modal.propTypes = {
    hasCloseBtn: PropTypes.bool,
    children: PropTypes.object,
  };

  const { modalOpen, setModalOpen } = useContext(Context);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      // if modalOpen state is true - showModal(),if its false close()
      if (modalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [modalOpen]);

  return (
    <dialog ref={modalRef} className="modal">
      {/* if showModal() - modal is visible, if close() modal is invisible */}
      {hasCloseBtn && ( //close modal button
        <button className="close-modal-btn" onClick={() => handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
