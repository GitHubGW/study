import { createStore } from "redux";

const number = document.getElementById("number");
const addBtn = document.getElementById("addBtn");
const minusBtn = document.getElementById("minusBtn");

number.innerHTML = 0;

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "handleAddBtn":
      return count + 1;
    case "handleMinusBtn":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerHTML = countStore.getState();
};

const handleAddBtn = () => {
  countStore.dispatch({ type: "handleAddBtn" });
};

const handleMinusBtn = () => {
  countStore.dispatch({ type: "handleMinusBtn" });
};

countStore.subscribe(onChange);

addBtn.addEventListener("click", handleAddBtn);
minusBtn.addEventListener("click", handleMinusBtn);
