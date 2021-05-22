import { useState, useEffect } from "react";

const useConfirm = (message = "") => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  };

  return confirmAction;
};

function UseConfirm() {
  const confirmAction = useConfirm("Are you sure?");

  return (
    <div>
      <h1>useConfirm</h1>
      <button onClick={confirmAction}>Confirm</button>
    </div>
  );
}

export default UseConfirm;
