import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import handleChange from "../utils/handlers/handleChange";
import handleSubmit from "../utils/handlers/handleSubmit";

const Form = () => {
  const {
    quiz,
    setQuiz,
    setQuestions,
    questions,
    data,
    url,
    setNum,
    useFetch,
    setIsSelecting,
  } = useContext(Context);

  return (
    <div className="quiz-select">
      <form method="post">
        <h1>Quizz App</h1>
        <div className="custom-num">
          <label htmlFor="amount">Number of Questions</label>
          <input
            className="numQ"
            name="amount"
            type="number"
            value={quiz.amount}
            min="1"
            max="50"
            onChange={(e) => handleChange(e, quiz, setQuiz)}
          />
        </div>
        <div className="custom-select">
          <label htmlFor="category">Select Category</label>
          <select
            name="category"
            value={quiz.category}
            onChange={(e) => handleChange(e, quiz, setQuiz)}
          >
            <option value="">Random</option>
            <option value="9">General Knowlege</option>
            <option value="11">Movies</option>
            <option value="12">Music</option>
            <option value="14">Tv Shows</option>
            <option value="15">Video Games</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="27">Animals</option>
            <option value="31">Anime and Manga</option>
          </select>
        </div>
        <div className="custom-select">
          <label htmlFor="difficulty">Select Difficulty</label>
          <select
            name="difficulty"
            value={quiz.difficulty}
            onChange={(e) => handleChange(e, quiz, setQuiz)}
          >
            <option value="">Random</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button
          className="start-btn btn"
          onClick={(e) =>
            handleSubmit(e, quiz, setNum, setIsSelecting, useFetch)
          }
        >
          DONE
        </button>
      </form>
    </div>
  );
};

export default Form;
