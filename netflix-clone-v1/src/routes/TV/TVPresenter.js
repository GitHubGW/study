import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loading from "components/Loading";
import Section from "components/Section";
import Error from "components/Error";

const Container = styled.div``;

const TVPresenter = ({ airingToday, onTheAir, popular, topRated, error, loading }) => {
  return loading ? (
    <Loading></Loading>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>TV | Netflix</title>
      </Helmet>

      <Container>
        {airingToday?.length > 0 && (
          <Section title={"Airing Today"}>
            {airingToday?.map((airingToday) => (
              <h1 key={airingToday.id}>{airingToday.name}</h1>
            ))}
          </Section>
        )}

        {onTheAir?.length > 0 && (
          <Section title={"On The Air"}>
            {onTheAir?.map((onTheAir) => (
              <h1 key={onTheAir.id}>{onTheAir.name}</h1>
            ))}
          </Section>
        )}

        {popular?.length > 0 && (
          <Section title={"Popular"}>
            {popular?.map((popular) => (
              <h1 key={popular.id}>{popular.name}</h1>
            ))}
          </Section>
        )}

        {topRated?.length > 0 && (
          <Section title={"Top Rated"}>
            {topRated?.map((topRated) => (
              <h1 key={topRated.id}>{topRated.name}</h1>
            ))}
          </Section>
        )}
      </Container>

      {error && <Error error={error}></Error>}
    </HelmetProvider>
  );
};

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  onTheAir: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
