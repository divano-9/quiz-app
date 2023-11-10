import { useContext, useRef, useEffect } from "react";
import { Context } from "../../states/GlobalContext";

const Modal = ({ hasCloseBtn = true, children }) => {
  const { modalOpen, setModalOpen } = useContext(Context);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (modalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [modalOpen]);

  return (
    <dialog ref={modalRef} className="modal">
      {hasCloseBtn && (
        <button className="close-modal-btn" onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
