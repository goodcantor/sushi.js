import { createStore } from "redux";

const defaultState = {
  amount: 1000,
  age: 17,
  debt: 100,
};



const counter = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT_AMOUNT":
      return { ...state, amount: state.amount + action.payload };

    default:
      return state;
  }
};

export const store = createStore(counter);
