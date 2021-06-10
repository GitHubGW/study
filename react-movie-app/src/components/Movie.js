import { Link } from "react-router-dom";

const Movie = ({ id, rating, summary, title, year, poster, genres }) => {
  console.log(poster);
  return (
    <div className="eachMovie" id={id}>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <h5>{year}</h5>
      <h5>{genres}</h5>
      <h5>{rating}</h5>
    </div>
  );
};

export default Movie;
