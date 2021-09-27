import React, { useEffect, useRef, useState } from "react";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";

const App = () => {
  return (
    <>
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
    </>
  );
};

export default App;
