import { useState, useEffect } from "react";

const usePreventLeave = () => {
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    console.log("enablePrevent");
    window.addEventListener("beforeunload", handleBeforeUnload);
  };
  const disablePrevent = () => {
    console.log("disablePrevent");
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };

  return { enablePrevent, disablePrevent };
};

function UsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <h1>usePreventLeave</h1>
      <button onClick={enablePrevent}>enablePrevent</button>
      <button onClick={disablePrevent}>disablePrevent</button>
    </div>
  );
}

export default UsePreventLeave;
