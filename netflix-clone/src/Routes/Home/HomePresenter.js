import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing Movies">{nowPlaying.map((movie) => movie.title)}</Section>}
      {upcoming && upcoming.length > 0 && <Section title="Upcoming Movies">{upcoming.map((movie) => movie.title)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular Movies">{popular.map((movie) => movie.title)}</Section>}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
