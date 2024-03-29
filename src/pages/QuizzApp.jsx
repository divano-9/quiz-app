import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import Form from "./Form";
import Quiz from "./Quiz";

const QuizzApp = () => {
  const { isSelecting } = useContext(Context);

  return isSelecting ? <Form /> : <Quiz />;
};

export default QuizzApp;
