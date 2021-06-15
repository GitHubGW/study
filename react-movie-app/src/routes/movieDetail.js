import { Link } from "react-router-dom";

const MovieDetail = (props) => {
  const { location, history } = props;

  if (location.state === undefined) {
    history.push("/");
  }

  if (location.state) {
    console.log(location.state);

    const {
      state: { id, title, summary, poster, year, rating, genres },
    } = location;

    return (
      <div>
        <h1>title: {title}</h1>
        <h1>summary: {summary.slice(0, 200)}</h1>
        <h1>poster: {poster}</h1>
        <h1>year: {year}</h1>
        <h1>rating: {rating}</h1>
        <h1>genres: {genres.join(",")}</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default MovieDetail;
