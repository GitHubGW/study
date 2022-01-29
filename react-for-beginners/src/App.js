import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((counter) => counter + 1);
  };

  const onChange = (event) => {
    setKeyword(event.currentTarget.value);
  };

  console.log("render");

  useEffect(() => {
    if (keyword.length > 5) {
      console.log("useEffect");
    }
  }, [keyword]);

  console.log("render2");

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" />
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
