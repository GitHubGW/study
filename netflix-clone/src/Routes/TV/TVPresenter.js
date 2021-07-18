import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  console.log(topRated, popular, airingToday, error, loading);

  return "TVPresenter";
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
