import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  padding: 10px 30px;
  margin: 0 15px;
  transition: 0.3s;
  border-bottom: 3px solid ${(props) => (props.pathname === "true" ? "crimson" : "transparent")};
`;

const ScLink = styled(Link)`
  text-decoration: none;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <Container>
      <Ul>
        <Li pathname={pathname === "/" ? "true" : "false"}>
          <ScLink to="/">Movie</ScLink>
        </Li>
        <Li pathname={pathname === "/tv" ? "true" : "false"}>
          <ScLink to="/tv">TV</ScLink>
        </Li>
        <Li pathname={pathname === "/search" ? "true" : "false"}>
          <ScLink to="/search">Search</ScLink>
        </Li>
      </Ul>
    </Container>
  );
};

export default withRouter(Header);
