import { Link } from "react-router-dom";

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>You've finnished the quiz!</h2>
      <p>Results: {`${props.correct}/${props.questNum}`}</p>
      <button>
        <Link to="/">Try Again</Link>
      </button>
    </div>
  );
};

export default Modal;
