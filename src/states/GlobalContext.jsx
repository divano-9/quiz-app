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
  const [num, setNum] = useState(0); // question number (question[index])
  const [correct, setCorrect] = useState(0); // number of correct answers clicked
  const [modalOpen, setModalOpen] = useState(false);
  const [correctClass, setCorrectClass] = useState(false);
  const [wrongClass, setWrongClass] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSelecting, setIsSelecting] = useState(true); // is user still choosing/in form component

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
    isSelecting,
    setIsSelecting,
    answers,
    setAnswers,
    useFetch,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
