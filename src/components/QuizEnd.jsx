import { useContext } from "react";
import Modal from "./modal/Modal";
import { Context } from "../states/GlobalContext";

const QuizEnd = (props) => {
  const { setCorrect, setModalOpen, setIsSelecting } = useContext(Context);
  return (
    <Modal hasCloseBtn={false}>
      <h2>You've finnished the quiz!</h2>
      <p>Results: {`${props.correct}/${props.questNum}`}</p>
      <button
        onClick={() => {
          setModalOpen((current) => !current);
          setCorrect(0);
          setIsSelecting(true);
        }}
      >
        Try Again
      </button>
    </Modal>
  );
};

export default QuizEnd;
