import React, { useEffect, useRef, useState } from "react";

const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const element = useRef();

  const handleFullScreen = () => {
    if (element.current) {
      if (document.fullscreenElement === null) {
        setIsFullScreen(true);
        element.current.requestFullscreen();
      }
    }
  };

  const handleExitFullScreen = () => {
    if (document.fullscreenElement !== null) {
      setIsFullScreen(false);
      document.exitFullscreen();
    }
  };

  return { isFullScreen, element, handleFullScreen, handleExitFullScreen };
};

const UseFullScreen = () => {
  const { isFullScreen, element, handleFullScreen, handleExitFullScreen } = useFullScreen();

  return (
    <div>
      <h1>🧑🏻‍💻</h1>
      <h2>Is FullScreen? {isFullScreen ? "Yes" : "No"}</h2>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
        <button onClick={handleExitFullScreen}>Exit</button>
      </div>
      <button onClick={handleFullScreen}>FullScreen</button>
    </div>
  );
};

export default UseFullScreen;
