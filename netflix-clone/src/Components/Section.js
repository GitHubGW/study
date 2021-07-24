import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const Children = styled.div`
  display: block;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Children>{children}</Children>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
