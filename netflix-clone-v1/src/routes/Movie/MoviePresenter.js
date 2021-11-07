import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "components/Loading";
import Section from "components/Section";

const Container = styled.div``;

const MoviePresenter = ({ nowPlaying, popular, topRated, upcoming, error, loading }) => {
  console.log("MoviePresenter", nowPlaying, popular, topRated, upcoming, error, loading);

  return loading ? (
    <Loading></Loading>
  ) : (
    <Container>
      {nowPlaying?.length > 0 && (
        <Section title={"Now Playing"}>
          {nowPlaying?.map((nowPlaying) => (
            <h1>{nowPlaying.title}</h1>
          ))}
        </Section>
      )}

      {popular?.length > 0 && (
        <Section title={"Popular"}>
          {popular?.map((popular) => (
            <h1>{popular.title}</h1>
          ))}
        </Section>
      )}

      {topRated?.length > 0 && (
        <Section title={"Top Rated"}>
          {topRated?.map((topRated) => (
            <h1>{topRated.title}</h1>
          ))}
        </Section>
      )}

      {upcoming?.length > 0 && (
        <Section title={"Upcoming"}>
          {upcoming?.map((upcoming) => (
            <h1>{upcoming.title}</h1>
          ))}
        </Section>
      )}
    </Container>
  );
};

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MoviePresenter;
