const handleClick = (
  e,
  answer,
  correct_answer,
  questions,
  setNum,
  num,
  setModalOpen,
  tacno
) => {
  e.preventDefault();
  if (answer == correct_answer) {
    console.log("correct!");
    // setCorrect((current) => current + 1); // add +1 to number of correct answers
    tacno.current = tacno.current + 1;
    if (num === questions.length - 1) {
      // if finished with all of the questions open modal
      setModalOpen(true);
    } else {
      e.target.classList.toggle("correct");

      setTimeout(() => {
        e.target.classList.toggle("correct");
      }, 800);
      setTimeout(() => {
        setNum((current) => current + 1); // after adding correct class, go to next question
      }, 1800);
    }
  } else {
    // same functions as correct
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
      }, 1800);
    }
  }
};

export default handleClick;
