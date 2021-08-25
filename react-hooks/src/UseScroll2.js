import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleScroll = (event) => {
    console.log(window.scrollX, window.scrollY);

    setState({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  const handleUseEffect = () => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  useEffect(handleUseEffect, []);

  return state;
};

const UseScroll2 = () => {
  const { x, y } = useScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1>🧑🏻‍💻</h1>
      <h5 style={{ position: "fixed" }}>
        {x}/{y}
      </h5>
      <h2 style={{ position: "fixed", top: "130px", color: y > 1000 ? "red" : "blue" }}>Hello</h2>
    </div>
  );
};

export default UseScroll2;
