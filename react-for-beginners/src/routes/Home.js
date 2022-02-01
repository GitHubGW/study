import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const handleFetch = async () => {
    const {
      data: { movies },
    } = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    setLoading(false);
    setMovies(movies);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {loading === true && <h1>Loading...</h1>}
      {loading === false && (
        <div>
          {movies.map((movie) => (
            <MovieList key={movie.id} title={movie.title} rating={movie.rating} runtime={movie.runtime} coverImage={movie.medium_cover_image} genres={movie.genres} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
