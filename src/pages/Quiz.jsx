import { useContext, useEffect } from "react";
import { Context } from "../states/GlobalContext";
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
    correctClass,
    setCorrectClass,
    wrongClass,
    setWrongClass,
    setIsSelecting,
    quiz,
  } = useContext(Context);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const { question, correct_answer, incorrect_answers } = questions[num];

  const answers = randomizeAnswers(correct_answer, incorrect_answers);

  console.log(`num: ${num}`);
  console.log(`question lenght: ${questions.length - 1}`);

  return (
    <>
      <section className={`quiz background background-${quiz.category}`}>
        <h2>{decode(question)}</h2>
        <div className="answers">
          {answers.map((answer, index) => {
            return (
              <div className="answer" key={index}>
                <label
                  htmlFor={index}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(e.target.className);
                    if (answer == correct_answer) {
                      console.log("correct!");
                      setCorrect((current) => current + 1);
                      if (num === questions.length - 1) {
                        setModalOpen(true);
                      } else {
                        e.target.classList.toggle("correct");

                        setTimeout(() => {
                          e.target.classList.toggle("correct");
                        }, 800);
                        setTimeout(() => {
                          setNum((current) => current + 1);
                        }, 2000);
                      }
                    } else {
                      console.log("wrong!");
                      if (num === questions.length - 1) {
                        setModalOpen(true);
                      } else {
                        e.target.classList.add("wrong");

                        setTimeout(() => {
                          e.target.classList.toggle("wrong");
                        }, 800);
                        setTimeout(() => {
                          setNum((current) => current + 1);
                        }, 2000);
                      }
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
        <QuizEnd correct={correct} questNum={questions.length} />
        <p>answers {`${correct} / ${questions.length}`}</p>
      </section>
    </>
  );
};

export default Quiz;
