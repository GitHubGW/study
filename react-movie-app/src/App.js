import { HashRouter, BrowserRouter, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import MovieDetail from "./routes/MovieDetail";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={MovieDetail}></Route>
    </HashRouter>
  );
};

export default App;
