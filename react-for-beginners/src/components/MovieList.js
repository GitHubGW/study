import { Link } from "react-router-dom";

const MovieList = ({ title, rating, runtime, coverImage, genres }) => {
  return (
    <div>
      <Link to="/movies">
        <img src={coverImage} alt={title} style={{ width: "250px", height: "400px" }} />
        <h3>
          {title} ({runtime}분)
        </h3>
        {genres.map((genre) => (
          <h4>{genre}</h4>
        ))}
        <h5>⭐️ {rating}</h5>
      </Link>
    </div>
  );
};

export default MovieList;
