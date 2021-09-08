import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Nav from "components/Nav";

const Router = () => {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
