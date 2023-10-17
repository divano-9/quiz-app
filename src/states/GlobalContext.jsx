import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import PropTypes from "prop-types";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  GlobalContext.propTypes = {
    children: PropTypes.object,
  };

  const [questions, SetQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("");

  const values = {
    questions,
    SetQuestions,
    category,
    setCategory,
    amount,
    setAmount,
    difficulty,
    setDifficulty,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
