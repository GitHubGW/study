import React, { useEffect, useRef, useState } from "react";
import usePreventLeave from "@gitgw/use-prevent-leave";

const TestHooks = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <h1>🧑🏻‍💻</h1>
      <button onClick={enablePrevent}>enablePrevent</button>
      <button onClick={disablePrevent}>disablePrevent</button>
    </div>
  );
};

export default TestHooks;
