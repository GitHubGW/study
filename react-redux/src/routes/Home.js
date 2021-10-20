import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  font-size: 50px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;

const Home = ({ state, dispatch }) => {
  const onClick = () => {
    localStorage.setItem("isDark", !state);
    dispatch({ type: !state });
  };

  return (
    <Container>
      <Title>{state ? "Dark Mode" : "Light Mode"}</Title>
      <Button onClick={onClick}>{state ? "🌚" : "🌝"}</Button>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
