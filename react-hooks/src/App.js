import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = (value) => {
    console.log("updateTitle");
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle);

  return setTitle;
};

function App() {
  const setTitle = useTitle("Loading...");

  return (
    <div>
      <h1>useTitle</h1>
      <button
        onClick={() => {
          setTitle("hello");
        }}
      >
        Change Title
      </button>
    </div>
  );
}

export default App;
