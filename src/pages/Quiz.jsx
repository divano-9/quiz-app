import { useContext, useEffect } from "react";
import { Context } from "../states/GlobalContext";
import { decode } from "html-entities"; /* plugin for replacing entities with text */
import randomizeAnswers from "../utils/randomizeAnswers";
import QuizEnd from "../components/QuizEnd";
import handleClick from "../utils/handlers/handleClick";
import MoonLoader from "react-spinners/MoonLoader";

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
    correctClass,
    setCorrectClass,
    wrongClass,
    setWrongClass,
    setIsSelecting,
    quiz,
  } = useContext(Context);

  if (loading) {
    return (
      <div className="spinner">
        <div>
          <MoonLoader color="#36d7b7" />
        </div>
      </div>
    );
  }

  const { question, correct_answer, incorrect_answers } = questions[num];

  const answers = randomizeAnswers(correct_answer, incorrect_answers);

  return (
    <section className={`quiz background background-${quiz.category}`}>
      <h2>{decode(question)}</h2>
      <div className="answers">
        {answers.map((answer, index) => {
          return (
            <div className="answer" key={index}>
              <label
                htmlFor={index}
                onClick={(e) =>
                  handleClick(
                    e,
                    answer,
                    correct_answer,
                    questions,
                    setCorrect,
                    setNum,
                    num,
                    setModalOpen
                  )
                }
              >
                {decode(answer.toString())}
              </label>
              <input type="radio" value={answer} name={answer} id={index} />
            </div>
          );
        })}
      </div>
      <QuizEnd correct={correct} questNum={questions.length} /> {/* modal */}
    </section>
  );
};

export default Quiz;
