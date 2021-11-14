import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Section from "components/Section";
import Error from "components/Error";

const Container = styled.div``;

const SearchPresenter = ({ movieResult, tvResult, word, error, onChange, onSubmit }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Search | Netflix</title>
      </Helmet>

      <Container>
        <form onSubmit={onSubmit}>
          <input placeholder="Search Movie or TV." onChange={onChange} value={word}></input>
          <button onClick={onSubmit}>Search</button>
        </form>

        {movieResult?.length > 0 && (
          <Section title={"Movie Result"}>
            {movieResult?.map((movie) => (
              <h1 key={movie.id}>{movie.title}</h1>
            ))}
          </Section>
        )}

        {tvResult?.length > 0 && (
          <Section title={"TV Result"}>
            {tvResult?.map((tv) => (
              <h1 key={tv.id}>{tv.name}</h1>
            ))}
          </Section>
        )}
        {movieResult?.length === 0 && tvResult?.length === 0 && <h1>Nothing Found</h1>}
      </Container>

      {error && <Error error={error}></Error>}
    </HelmetProvider>
  );
};

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  word: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchPresenter;
