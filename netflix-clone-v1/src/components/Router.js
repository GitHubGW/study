import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "routes/Home";
import Movie from "routes/Movie";
import TV from "routes/TV";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie" component={Movie}></Route>
        <Route path="/movie/1" render={() => <h1>Movie1</h1>}></Route>
        <Route path="/tv" component={TV}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
