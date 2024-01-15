import { useContext } from "react";
import Modal from "./modal/Modal";
import { Context } from "../states/GlobalContext";

const QuizEnd = (props) => {
  const { setModalOpen, setIsSelecting, tacno } = useContext(Context);
  return (
    <Modal hasCloseBtn={false}>
      {/* no modal close btn */}
      <h2>You've finnished the quiz!</h2>
      <p>
        Your Results:{" "}
        {`${tacno.current} correct out of ${props.questNum} questions`}
      </p>
      <button
        className="btn"
        onClick={() => {
          setModalOpen(false);
          tacno.current = 0;
          setIsSelecting(true);
        }}
      >
        Try Again
      </button>
      {/* on click close modal, reset correct questions number to 0 and go to form component */}
    </Modal>
  );
};

export default QuizEnd;
