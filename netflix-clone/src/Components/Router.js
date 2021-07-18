import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={TV}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
        <Route path="/tv/:id" component={Detail}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};
