import { useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";
import { Context } from "../states/GlobalContext";

const QuizStart = () => {
  const {
    category,
    difficulty,
    amount,
    modalOpen,
    setModalOpen,
    setIsFetching,
  } = useContext(Context);
  {
    console.log(modalOpen);
  }
  return (
    <Modal hasCloseBtn={false}>
      <h2>{`You've chosen: ${category} quiz with ${amount} questions on ${difficulty} difficulty`}</h2>
      <button
        className="startBtn btn"
        onClick={() => {
          setIsFetching((current) => !current);
          setModalOpen((current) => !current);
        }}
      >
        <Link to="quiz">START!</Link>
      </button>
    </Modal>
  );
};

export default QuizStart;
