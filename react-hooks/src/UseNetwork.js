import { useState, useEffect } from "react";

const useNetwork = (isOnline) => {
  const [status, setStatus] = useState(isOnline);

  const handleUseEffect = () => {
    const handleOnOffline = () => {
      if (navigator.onLine === true) {
        console.log("Online");
        setStatus(navigator.onLine);
      } else if (navigator.onLine === false) {
        console.log("Offline");
        setStatus(navigator.onLine);
      }
    };

    window.addEventListener("online", handleOnOffline);
    window.addEventListener("offline", handleOnOffline);

    return () => {
      window.removeEventListener("online", handleOnOffline);
      window.addEventListener("offline", handleOnOffline);
    };
  };

  useEffect(handleUseEffect, []);

  return status;
};

const UseNetwork = () => {
  const isOnline = navigator.onLine;
  const status = useNetwork(isOnline);

  return (
    <>
      <h1>🧑🏻‍💻</h1>
      <h2>💻 Status: {status === true ? "Online" : "Offline"}</h2>
    </>
  );
};

export default UseNetwork;
