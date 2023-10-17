import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContext from "./states/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>
);
