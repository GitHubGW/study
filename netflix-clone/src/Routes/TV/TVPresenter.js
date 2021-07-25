import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

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
            <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date && tv.first_air_date.substring(0, 4)} isMovie={false}></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular TV">
          {popular.map((tv) => (
            <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date && tv.first_air_date.substring(0, 4)} isMovie={false}></Poster>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today TV">
          {airingToday.map((tv) => (
            <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date && tv.first_air_date.substring(0, 4)} isMovie={false}></Poster>
          ))}
        </Section>
      )}
      {error && <Message text={error}></Message>}
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
