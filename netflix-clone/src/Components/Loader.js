import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-top: 20px;
`;

const Loader = () => {
  return <Container>⏳</Container>;
};

export default Loader;
