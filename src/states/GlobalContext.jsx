import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  GlobalContext.propTypes = {
    children: PropTypes.object,
  };

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [quiz, setQuiz] = useState({
    category: "",
    amount: 10,
    difficulty: "",
  });
  const [num, setNum] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [correctClass, setCorrectClass] = useState(false);
  const [wrongClass, setWrongClass] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSelecting, setIsSelecting] = useState(true);

  const baseUrl = "https://opentdb.com/api.php?";

  const useFetch = (url) => {
    axios
      .get(url)
      .then((response) => {
        setQuestions(response.data.results); // if fetching is successful set data state to api's respone data
      })
      .catch((error) => {
        setError(error); // if there is an error set it in error state
      })
      .finally(() => {
        setLoading(false); // after success or error set loading to false
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { category, amount, difficulty } = quiz;
    const url = `${baseUrl}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    useFetch(url);
    setNum(0);
    setIsSelecting(false);
  };

  const values = {
    questions,
    setQuestions,
    quiz,
    setQuiz,
    loading,
    num,
    setNum,
    correct,
    setCorrect,
    modalOpen,
    setModalOpen,
    correctClass,
    setCorrectClass,
    wrongClass,
    setWrongClass,
    handleChange,
    handleSubmit,
    isSelecting,
    setIsSelecting,
    answers,
    setAnswers,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
