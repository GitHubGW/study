import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Movie = ({ movie }) => {
  return (
    <div key={movie.id}>
      <Link to={`/${movie.id}`}>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <h3>
          {movie.title} ({movie.year})
        </h3>
        <h5>
          🌠{movie.rating}, {movie.runtime}분
        </h5>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
};

export default Movie;
