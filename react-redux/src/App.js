import { HashRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import About from "./routes/About";
import Home from "./routes/Home";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body{
    background-color: ${(props) => (props.isDark ? props.theme.darkColor : props.theme.lightColor)};
    color: ${(props) => (props.isDark ? props.theme.lightColor : props.theme.darkColor)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    text-align:center;
    font-family: 'Henny Penny', cursive;
  }

  a{
    color: ${(props) => (props.isDark ? props.theme.lightColor : props.theme.darkColor)};
    margin: 0 10px;
    font-size: 25px;
  }
`;

const FooterTitle = styled.h5`
  font-size: 12px;
  margin-top: 20px;
`;

const App = ({ state }) => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle isDark={state} />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <FooterTitle>&copy; ${new Date().getFullYear()} GW. ALL RIGHTS RESERVED.</FooterTitle>
      </ThemeProvider>
    </HashRouter>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { state };
};

export default connect(mapStateToProps, null)(App);
