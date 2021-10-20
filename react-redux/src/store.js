import { createStore } from "redux";

const isDark = JSON.parse(localStorage.getItem("isDark"));

const reducer = (state = isDark ? isDark : false, action) => {
  switch (action.type) {
    case true:
      return true;
    case false:
      return false;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
