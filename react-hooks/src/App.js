import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = (value) => {
    console.log("updateTitle");
    const htmlTitle = document.querySelector("title");
    setTitle(value);
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle);

  return updateTitle;
};

function App() {
  const aaa = useTitle("Loading...");

  return (
    <div>
      <h1>useTitle</h1>
      <button
        onClick={() => {
          aaa("hello");
        }}
      >
        Change Title
      </button>
    </div>
  );
}

export default App;
