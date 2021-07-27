import { useEffect, useState } from "react";

const TestHooks = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [seconNum, setSecondNum] = useState(0);

  console.log(firstNum);
  console.log(seconNum);

  const handleUseEffect = () => {
    console.log("handleUseEffect");
  };

  useEffect(handleUseEffect, [firstNum]);

  return (
    <>
      <h1>TestHooks</h1>
      <button onClick={handleUseEffect}>handleUseEffect</button>
      <button onClick={handleUseEffect}>handleUseEffect</button>
    </>
  );
};

export default TestHooks;
