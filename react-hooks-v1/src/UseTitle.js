import React, { useState } from "react";

const UseTitle = () => {
  const [title, setTitle] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    document.title = title;
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setTitle(value);
  };

  return (
    <>
      <h1>UseTitle</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write title" onChange={onChange} required></input>
        <button onClick={onSubmit}>Save</button>
      </form>
    </>
  );
};

export default UseTitle;
