import React, { useState, useEffect, useRef } from "react";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UsePreventLeave from "./UsePreventLeave";
import UseBeforeLeave from "./UseBeforeLeave";
import UseFadeIn from "./UseFadeIn";
import UseNetwork from "./UseNetwork";

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
      <UseFadeIn />
      <UseNetwork />
    </>
  );
};

export default App;
