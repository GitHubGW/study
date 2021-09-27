import React, { useRef } from "react";

const UseClick = () => {
  const element = useRef();

  const onClick = (event) => {
    const { current } = element;
    current.style.color = "crimson";
  };

  return (
    <>
      <h1>UseClick</h1>
      <button ref={element} onClick={onClick}>
        Click Me!
      </button>
    </>
  );
};

export default UseClick;
