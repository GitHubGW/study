import { HashRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import About from "./About";
import NewsDetail from "./NewsDetail";
import PageNotFound from "./PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/news-detail/:id" component={NewsDetail}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
