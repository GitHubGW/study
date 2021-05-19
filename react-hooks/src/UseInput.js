import { useState, useEffect } from "react";

const useInput = (initialValue, checkLength) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    // console.log("onChange");
    const {
      target: { value },
    } = event;

    if (typeof checkLength === "function") {
      const checkBoolean = checkLength(value);

      if (checkBoolean === true) {
        setValue(value);
      }
    }
  };

  return { value, onChange };
};

function UseInput() {
  const checkLength = (value) => {
    // console.log("checkLength");
    // console.log(value.length);
    return value.length < 10;
  };

  const name = useInput("Mr.", checkLength);
  // console.log(name);

  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="Write your Name" {...name} />
    </div>
  );
}

export default UseInput;
