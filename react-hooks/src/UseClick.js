import { useState, useEffect, useRef } from "react";

const useClick = () => {
  const element = useRef();

  const onClick = () => {
    console.log("onClick");
  };

  useEffect(() => {
    console.log("element", element);
    // console.log(element.current);

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      element.current.removeEventListener("click", onClick);
    };
  }, []);

  return element;
};

function UseClick() {
  const element = useClick();

  const input = useRef();

  // setTimeout(() => {
  //   console.log(input);
  // }, 3000);

  useEffect(() => {
    setTimeout(() => {
      input.current.focus();
    }, 3000);
  }, []);

  return (
    <div>
      <h1>useClick</h1>
      <button ref={element}>useClick</button>
      <input ref={input} placeholder="Write" />
    </div>
  );
}

export default UseClick;
