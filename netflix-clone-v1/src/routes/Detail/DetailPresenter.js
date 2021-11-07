import PropTypes from "prop-types";

const DetailPresenter = ({ isMovie, isTV, result, error, loading }) => {
  console.log("DetailPresenter", isMovie, isTV, result, error, loading);

  return "DetailPresenter";
};

DetailPresenter.propTypes = {
  isMovie: PropTypes.bool,
  isTV: PropTypes.bool,
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
