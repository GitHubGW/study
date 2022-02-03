import { Link } from "react-router-dom";

const Movie = ({ id, title, rating, runtime, coverImage, genres }) => {
  return (
    <div>
      <Link to={`/movies/${id}`} style={{ color: "black", textDecoration: "none" }}>
        <img src={coverImage} alt={title} style={{ width: "250px", height: "400px" }} />
        <h3>
          {title} ({runtime}분)
        </h3>
        {genres.map((genre) => (
          <h4 key={genre}>{genre}</h4>
        ))}
        <h5>⭐️ {rating}</h5>
      </Link>
    </div>
  );
};

export default Movie;
