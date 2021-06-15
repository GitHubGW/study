import { Link } from "react-router-dom";

const Movie = ({ id, rating, summary, title, year, poster, genres }) => {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: { id, title, summary, poster, year, rating, genres },
      }}
    >
      <div className="eachMovie" id={id}>
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <h4>{summary}</h4>
        <h5>{year}</h5>
        <h5>{`${genres}`}</h5>
        <h5>{rating}</h5>
      </div>
    </Link>
  );
};

export default Movie;
