import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import PropTypes from "prop-types";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  GlobalContext.propTypes = {
    children: PropTypes.object,
  };

  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("");
  const [index, setIndex] = useState(0);

  const baseUrl = "https://opentdb.com/api.php?";
  const url = `${baseUrl}amount=${amount}&category=${category}&difficulty=${difficulty}`;

  const { data, loading, error } = useFetch(url);

  const values = {
    questions,
    setQuestions,
    category,
    setCategory,
    amount,
    setAmount,
    difficulty,
    setDifficulty,
    data,
    url,
    loading,
    setIndex,
    index,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
