import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Nav from "components/Nav";

const Router = () => {
  return (
    <HashRouter>
      <Nav />
      <TransitionGroup>
        <CSSTransition timeout={300} className="fade">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </HashRouter>
  );
};

export default Router;
