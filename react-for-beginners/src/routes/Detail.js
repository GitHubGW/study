import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const handleFetch = useCallback(async () => {
    const {
      data: { movie },
    } = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <div>
      <h1>Detail</h1>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <Movie id={movie.id} title={movie.title} rating={movie.rating} runtime={movie.runtime} coverImage={movie.medium_cover_image} genres={movie.genres} />
      )}
    </div>
  );
};

export default Detail;
