import PropTypes from "prop-types";

const SearchPresenter = ({ movieResult, tvResult, word, error, loading, handleSubmit }) => {
  console.log("SearchPresenter", movieResult, tvResult, word, error, loading);

  return (
    <div>
      <form>
        <input></input>
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  word: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
};

export default SearchPresenter;
