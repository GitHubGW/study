import { useState } from "react";

const TestHooks = () => {
  const [count, setCount] = useState(1);

  console.log(count);
  console.log(setCount);

  const [email, setEmail] = useState("abc@gmail.com");
};

export default TestHooks;
