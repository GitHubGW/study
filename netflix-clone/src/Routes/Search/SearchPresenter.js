import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ movieResult, tvResult, searchTerm, error, loading, handleSubmit }) => {
  console.log(movieResult, tvResult, searchTerm, error, loading, handleSubmit);

  return "SearchPresenter";
};

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
