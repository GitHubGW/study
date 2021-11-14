import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loading from "components/Loading";
import Section from "components/Section";
import Error from "components/Error";

const Container = styled.div``;

const MoviePresenter = ({ nowPlaying, popular, topRated, upcoming, error, loading }) => {
  return loading ? (
    <Loading></Loading>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>Movie | Netflix</title>
      </Helmet>

      <Container>
        {nowPlaying?.length > 0 && (
          <Section title={"Now Playing"}>
            {nowPlaying?.map((nowPlaying) => (
              <h1 key={nowPlaying.id}>{nowPlaying.title}</h1>
            ))}
          </Section>
        )}

        {popular?.length > 0 && (
          <Section title={"Popular"}>
            {popular?.map((popular) => (
              <h1 key={popular.id}>{popular.title}</h1>
            ))}
          </Section>
        )}

        {topRated?.length > 0 && (
          <Section title={"Top Rated"}>
            {topRated?.map((topRated) => (
              <h1 key={topRated.id}>{topRated.title}</h1>
            ))}
          </Section>
        )}

        {upcoming?.length > 0 && (
          <Section title={"Upcoming"}>
            {upcoming?.map((upcoming) => (
              <h1 key={upcoming.id}>{upcoming.title}</h1>
            ))}
          </Section>
        )}
      </Container>

      {error && <Error error={error}></Error>}
    </HelmetProvider>
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
