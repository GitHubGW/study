import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={TV}></Route>
      <Route path="/search" exact component={Search}></Route>
    </Router>
  );
};
