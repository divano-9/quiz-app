const handleChange = (e, quiz, setQuiz) => {
  const name = e.target.name;
  const value = e.target.value;
  setQuiz({ ...quiz, [name]: value }); // set name and vaule of the quiz object to e.target value and name
};

export default handleChange;
