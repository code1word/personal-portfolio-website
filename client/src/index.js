import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="hidden_text">
      Sorry! Your device's screen width is not large enough to view this
      content. Please try again with a device that has a wider screen.
    </div>
  </React.StrictMode>
);

reportWebVitals();
