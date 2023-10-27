import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";

const Quiz = () => {
  const { questions, index, setIndex, loading } = useContext(Context);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(questions);

  return (
    <section className="quiz">
      <p>{questions[index].question}</p>
      {index === questions.length - 1 ? (
        <button>
          {" "}
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
    </section>
  );
};

export default Quiz;
