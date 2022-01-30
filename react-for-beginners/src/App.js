import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((showing) => !showing);
  };

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <User /> : null}
    </div>
  );
}

export default App;
