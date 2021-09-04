/* eslint-disable react/no-direct-mutation-state */
import React from "react";

class App extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;

    return <div>{loading ? "Loading.. .👑" : "Ready"}</div>;
  }
}

export default App;
