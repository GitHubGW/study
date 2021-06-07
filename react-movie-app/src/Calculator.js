import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    // console.log(props);
    // console.log("constructor");
    super(props);
  }

  state = {
    count: 0,
  };

  handleAdd = () => {
    this.setState((current) => {
      return { count: current.count + 1 };
    });
  };
  handleMinus = () => {
    this.setState((current) => {
      return { count: current.count + 1 };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Cal</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleMinus}>Minus</button>
      </div>
    );
  }
}

export default Calculator;
