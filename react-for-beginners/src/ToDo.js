import { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (todo === "") {
      return;
    }
    setTodos((todos) => [todo, ...todos]);
    setTodo("");
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <h1>To Do ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
