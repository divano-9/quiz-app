import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const QuizEnd = (props) => {
  return (
    <Modal hasCloseBtn={false}>
      <h2>You've finnished the quiz!</h2>
      <p>Results: {`${props.correct}/${props.questNum}`}</p>
      <button>
        <Link to="/">Try Again</Link>
      </button>
    </Modal>
  );
};

export default QuizEnd;
