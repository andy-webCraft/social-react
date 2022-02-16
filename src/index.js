import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App.jsx";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
