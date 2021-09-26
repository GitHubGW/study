### React Hooks

- UseInput: input에 입력 가능한 글자를 10자 미만으로 제한하고, 특수기호 @를 포함시키지 않도록 제한하는 훅
- UseTabs: 버튼을 클릭했을 때, 버튼에 해당되는 배열의 탭을 불러오는 훅

#### Class Component vs Functional Component

```
// Class Component
import React, { useState } from "react";

class App extends React.Component {
  state = {
    number: 0,
  };

  handleButton = (event) => {
    const {
      target: { name },
    } = event;

    if (name === "addBtn") {
      this.setState((state) => {
        return { number: state.number + 1 };
      });
    } else if (name === "minusBtn") {
      this.setState((state) => {
        return { number: state.number - 1 };
      });
    }
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <h1>App</h1>
        <h3>{number}</h3>
        <button name="addBtn" onClick={this.handleButton}>
          더하기
        </button>
        <button name="minusBtn" onClick={this.handleButton}>
          빼기
        </button>
      </>
    );
  }
}

export default App;
```

```
// Functional Component
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const handleButton = (event) => {
    const {
      target: { name },
    } = event;

    if (name === "addBtn") {
      setNumber((number) => number + 1);
    } else if (name === "minusBtn") {
      setNumber((number) => number - 1);
    }
  };

  return (
    <>
      <h1>App</h1>
      <h3>{number}</h3>
      <button name="addBtn" onClick={handleButton}>
        더하기
      </button>
      <button name="minusBtn" onClick={handleButton}>
        빼기
      </button>
    </>
  );
};

export default App;
```
