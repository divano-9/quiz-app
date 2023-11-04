import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";
import { decode } from "html-entities";
import randomizeAnswers from "../utils/randomizeAnswers";

const Quiz = () => {
  const { questions, index, setIndex, loading, correct, setCorrect } =
    useContext(Context);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (questions[index] === undefined) {
    return (
      <button>
        <Link to="/">START AGAIN</Link>
      </button>
    );
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  let answers = randomizeAnswers(correct_answer, incorrect_answers);
  answers = decode(answers);

  console.log(answers);

  return (
    <section className="quiz">
      <p>{decode(question)}</p>
      <div className="answers">
        {answers.map((answer, index) => {
          return (
            <div className="answer" key={index}>
              <label
                htmlFor={index}
                onClick={() => {
                  setIndex((current) => current + 1);

                  if (answer == correct_answer) {
                    console.log("correct!");
                    setCorrect((current) => current + 1);
                  } else {
                    console.log("wrong!");
                  }
                }}
              >
                {answer}
              </label>
              <input type="radio" value={answer} name={answer} id={index} />
            </div>
          );
        })}
      </div>
      {index === questions.length ? (
        <button>
          <Link to="/">START AGAIN</Link>
        </button>
      ) : (
        <button
          onClick={() => {
            setIndex((current) => current + 1);
            console.log(index);
          }}
        >
          NEXT
        </button>
      )}
      <p>answers {`${correct} / ${questions.length}`}</p>
    </section>
  );
};

export default Quiz;
