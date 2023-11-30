import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import useFetch from "../hooks/useFetch";

const Form = () => {
  const {
    quiz,
    setQuiz,
    setQuestions,
    questions,
    data,
    url,
    setNum,
    handleChange,
    handleSubmit,
  } = useContext(Context);

  return (
    <>
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
            onChange={handleChange}
          />
        </div>
        <div className="custom-select">
          <label htmlFor="category">Select Category</label>
          <select name="category" value={quiz.category} onChange={handleChange}>
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
            onChange={handleChange}
          >
            <option value="">Random</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button className="start-btn btn" onClick={handleSubmit}>
          DONE
        </button>
      </form>
      <button
        className="btn"
        onClick={() => {
          console.log(questions);
        }}
      >
        CHECK
      </button>
    </>
  );
};

export default Form;
