import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./scss/app.scss";

import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  amount: 1000,
  age: 17,
  debt: 100,
};

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, amount: state.amount + action.payload };

    default:
      return state;
  }
};

export const store = createStore(counter);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
