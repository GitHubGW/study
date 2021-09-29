import React, { useState, useEffect, useRef } from "react";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UsePreventLeave from "./UsePreventLeave";
import UseBeforeLeave from "./UseBeforeLeave";

const App = () => {
  return (
    <>
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
    </>
  );
};

export default App;
