import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";
import { decode } from "html-entities";
import randomizeAnswers from "../utils/randomizeAnswers";
import QuizEnd from "../components/QuizEnd";

const Quiz = () => {
  const {
    questions,
    num,
    setNum,
    loading,
    correct,
    setCorrect,
    modalOpen,
    setModalOpen,
  } = useContext(Context);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (questions[num] === undefined) {
    return (
      <button>
        <Link to="/">START AGAIN un</Link>
      </button>
    );
  }

  const { question, correct_answer, incorrect_answers } = questions[num];
  const answers = randomizeAnswers(correct_answer, incorrect_answers);
  console.log(`num: ${num}`);
  console.log(`question lenght: ${questions.length - 1}`);

  return (
    <>
      <section className="quiz">
        <p>{decode(question)}</p>
        <div className="answers">
          {answers.map((answer, index) => {
            return (
              <div className="answer" key={index}>
                <label
                  htmlFor={index}
                  onClick={() => {
                    if (num === questions.length - 1) {
                      setModalOpen((current) => !current);
                      console.log(modal);
                    } else {
                      setNum((current) => current + 1);
                    }

                    console.log(`new num: ${num}`);

                    if (answer == correct_answer) {
                      console.log("correct!");
                      setCorrect((current) => current + 1);
                    } else {
                      console.log("wrong!");
                    }
                  }}
                >
                  {decode(answer.toString())}
                </label>
                <input type="radio" value={answer} name={answer} id={index} />
              </div>
            );
          })}
        </div>

        {modalOpen === true
          ? console.log(" TRUE!")
          : console.log(" STILL FALSE!")}

        {/*      {num === questions.length ? (
          <button>
            <Link to="/">START AGAIN</Link>
          </button>
        ) : (
          <button
            onClick={() => {
              setNum((current) => current + 1);
              console.log(num);
            }}
          >
            NEXT
          </button>
        )} */}
        <QuizEnd correct={correct} questNum={questions.length} />
        <p>answers {`${correct} / ${questions.length}`}</p>
      </section>
    </>
  );
};

export default Quiz;
