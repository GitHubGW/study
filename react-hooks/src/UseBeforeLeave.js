import { useState, useEffect } from "react";

const useBeforeLeave = () => {
  // console.log("useBeforeLeave");

  const handleMouseLeave = (event) => {
    // console.log(event);
    if (event.clientY < 0) {
      console.log("Don't Leave");
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
};

function UseBeforeLeave() {
  useBeforeLeave();

  return (
    <div>
      <h1>useBeforeLeave</h1>
    </div>
  );
}

export default UseBeforeLeave;
