import React, { useState } from "react";

// function component
function FunctionComponent() {
  const [item, setItem] = useState(0);

  const addBtn = () => {
    setItem(item + 1);
  };
  const minusBtn = () => {
    setItem(item - 1);
  };

  return (
    <div className="App">
      <h1>Function vs Class</h1>
      <h3>{item}</h3>
      <button onClick={addBtn}>Add</button>
      <button onClick={minusBtn}>Minus</button>
    </div>
  );
}

export default FunctionComponent;

/*
// class component
class App extends React.Component {
  state = {
    item: 0,
  };

  addBtn = () => {
    console.log("add");
    this.setState({ item: this.state.item + 1 });
  };

  minusBtn = () => {
    console.log("minus");
    this.setState({ item: this.state.item - 1 });
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <h3>{this.state.item}</h3>
        <button onClick={this.addBtn}>Add</button>
        <button onClick={this.minusBtn}>Minus</button>
      </div>
    );
  }
}

export default App;
*/
