import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Accordion from "./Accordion";

function App() {
  return <Accordion />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
