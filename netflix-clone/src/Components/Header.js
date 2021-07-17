import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  background-color: black;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  border-bottom: 5px solid ${(props) => (props.current ? "crimson" : "transparent")};
`;

const ScLink = styled(Link)`
  color: white;
  margin: 0 20px;
  font-size: 20px;
`;

export default withRouter((props) => {
  // console.log("props", props);

  const {
    location: { pathname },
  } = props;

  return (
    <Header>
      <Ul>
        <Li current={pathname === "/" && true}>
          <ScLink to="/">Movies</ScLink>
        </Li>
        <Li current={pathname === "/tv" && true}>
          <ScLink to="/tv">TV</ScLink>
        </Li>
        <Li current={pathname === "/search" && true}>
          <ScLink to="/search">Search</ScLink>
        </Li>
      </Ul>
    </Header>
  );
});
