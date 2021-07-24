import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  console.log(topRated, popular, airingToday, error, loading);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated TV">
          {topRated.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular TV">
          {popular.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today TV">
          {airingToday.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
