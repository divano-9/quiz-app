const handleSubmit = (e, quiz, setNum, setIsSelecting, useFetch) => {
  e.preventDefault();
  const baseUrl = "https://opentdb.com/api.php?";
  const { category, amount, difficulty } = quiz;
  const url = `${baseUrl}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  useFetch(url);
  setNum(0); //reset question[index]
  setIsSelecting(false); // close form component and go to quiz component
};

export default handleSubmit;
