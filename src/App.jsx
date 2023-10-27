import { useState } from "react";
import Form from "./pages/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
