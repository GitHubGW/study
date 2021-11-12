import Section from "components/Section";
import PropTypes from "prop-types";

const SearchPresenter = ({ movieResult, tvResult, word, error, loading, onChange, onSubmit }) => {
  console.log("SearchPresenter", movieResult, tvResult, word, error, loading);

  return (
    <div>
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
    </div>
  );
};

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  word: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchPresenter;
