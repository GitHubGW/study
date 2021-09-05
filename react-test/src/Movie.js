import PropTypes from "prop-types";

const Movie = ({ title, year, rating, runtime, genres, medium_cover_image }) => {
  console.log("medium_cover_image", medium_cover_image);

  return (
    <div>
      <img src={medium_cover_image && medium_cover_image} alt={title && title}></img>
      <h1>
        {title && title} ({year && year})
      </h1>
      <h3>
        ⭐️{rating && rating}/10 @ {runtime && runtime}분 @ {genres && genres.map((genre) => genre + ".")}
      </h3>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array,
  medium_cover_image: PropTypes.string.isRequired,
};

export default Movie;
