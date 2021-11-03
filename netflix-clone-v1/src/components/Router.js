import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Movie from "routes/Movie";
import TV from "routes/TV";
import Search from "routes/Search";
import Detail from "routes/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Movie}></Route>
        <Route exact path="/tv" component={TV}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/movie/:id" component={Detail}></Route>
        <Route exact path="/tv/:id" component={Detail}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
