import { useState, useEffect } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const addBtn = () => {
    setCount(count + 2);
  };
  const minusBtn = () => {
    setCount(count - 2);
  };

  const [email, setEmail] = useState("");

  const updateEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  };

  return (
    <div>
      <h1>useState</h1>
      <h3>Count: {count}</h3>
      <h3>Email: {email}</h3>
      <button onClick={addBtn}>Add</button>
      <button onClick={minusBtn}>Minus</button>
      <input placeholder="email" onChange={updateEmail} />
    </div>
  );
}

export default UseState;
