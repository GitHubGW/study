import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";

const LIKE_MOVIE = gql`
  mutation ($movieId: Int!) {
    likeMovie(movieId: $movieId) @client
  }
`;

const GET_DETAIL_SUGGESTION_MOVIE = gql`
  query ($movieId: Int!) {
    getDetailMovie(movieId: $movieId) {
      id
      title
      year
      rating
      runtime
      medium_cover_image
      isLiked @client
    }
    getSuggestionMovies(movieId: $movieId) {
      id
      title
      year
      rating
      runtime
      summary
      medium_cover_image
      isLiked @client
    }
  }
`;

const Movie = ({ movie }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, { variables: { movieId: +movie.id } });
  useQuery(GET_DETAIL_SUGGESTION_MOVIE, { variables: { movieId: +movie.id } });

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
      <button onClick={likeMovie}>{movie.isLiked ? "Unlike" : "Like"}</button>
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
    isLiked: PropTypes.bool,
  }).isRequired,
};

export default Movie;
