import { useState, useEffect } from "react";

function UseEffect2() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(10);

  const handleUseEffect = () => {
    console.log("handleUseEffect");
  };

  useEffect(handleUseEffect, [firstNumber]);

  return (
    <div>
      <h1>useEffect2</h1>
      <button
        onClick={() => {
          setFirstNumber(firstNumber + 1);
        }}
      >
        {firstNumber}
      </button>
      <button
        onClick={() => {
          setSecondNumber(secondNumber + 2);
        }}
      >
        {secondNumber}
      </button>
    </div>
  );
}

export default UseEffect2;
