import { useContext } from "react";
import { Context } from "../states/GlobalContext";

const Form = () => {
  const {
    setCategory,
    setDifficulty,
    setAmount,
    category,
    difficulty,
    amount,
  } = useContext(Context);

  return (
    <form method="post">
      <h1>FORM</h1>
      <div>
        <label htmlFor="amount">Number of Questions</label>
        <input
          name="amount"
          type="number"
          min="1"
          max="50"
          defaultValue="10"
          onChange={(e) => {
            e.preventDefault();
            setAmount(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="category">Select Category</label>
        <select
          name="category"
          onChange={(e) => {
            e.preventDefault();
            setCategory(e.target.value);
          }}
        >
          <option value="any">Any Category</option>
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
      <div>
        <label htmlFor="difficulty">Select Difficulty</label>
        <select
          name="difficulty"
          onChange={(e) => {
            e.preventDefault();
            setDifficulty(e.target.value);
          }}
        >
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(category, difficulty, amount);
        }}
      >
        START!
      </button>
    </form>
  );
};

export default Form;
