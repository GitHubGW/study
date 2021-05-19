import { useState, useEffect } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log(value);
    setValue(value);
  };

  return { value, onChange };
};

function UseEffect() {
  const name = useInput("Mr.");
  console.log(name);

  return (
    <div>
      <h1>useEffect</h1>
      <input placeholder="Write your Name" {...name} />
    </div>
  );
}

export default UseEffect;
