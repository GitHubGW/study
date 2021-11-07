import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "components/Loading";
import Section from "components/Section";

const Container = styled.div``;

const TVPresenter = ({ airingToday, onTheAir, popular, topRated, error, loading }) => {
  console.log("TVPresenter", airingToday, onTheAir, popular, topRated, error, loading);

  return loading ? (
    <Loading></Loading>
  ) : (
    <Container>
      {airingToday?.length > 0 && (
        <Section title={"Airing Today"}>
          {airingToday?.map((tv) => (
            <h1>{tv.name}</h1>
          ))}
        </Section>
      )}

      {onTheAir?.length > 0 && (
        <Section title={"On The Air"}>
          {onTheAir?.map((tv) => (
            <h1>{tv.name}</h1>
          ))}
        </Section>
      )}

      {popular?.length > 0 && (
        <Section title={"Popular"}>
          {popular?.map((tv) => (
            <h1>{tv.name}</h1>
          ))}
        </Section>
      )}

      {topRated?.length > 0 && (
        <Section title={"Top Rated"}>
          {topRated?.map((tv) => (
            <h1>{tv.name}</h1>
          ))}
        </Section>
      )}
    </Container>
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
