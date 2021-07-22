import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.span``;

const Children = styled.div``;

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
