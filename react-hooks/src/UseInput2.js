import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    if (value.length < 10) {
      setValue(value);
    } else {
      return;
    }
  };

  return { value, onChange };
};

const UseInput2 = () => {
  const name = useInput(10);

  console.log(name);

  return (
    <>
      <h1>UseInput2</h1>
      <input placeholder="Name" {...name}></input>
    </>
  );
};

export default UseInput2;
