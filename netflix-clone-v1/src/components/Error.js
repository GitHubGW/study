import PropTypes from "prop-types";

const Error = ({ error }) => {
  return <h1>{error}</h1>;
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
