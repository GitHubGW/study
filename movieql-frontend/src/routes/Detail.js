import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useParams } from "react-router";
import Movie from "../components/Movie";

const GET_DETAIL_SUGGESTION_MOVIE = gql`
  query ($movieId: Int!) {
    getDetailMovie(movieId: $movieId) {
      id
      title
      year
      rating
      runtime
      medium_cover_image
    }
    getSuggestionMovies(movieId: $movieId) {
      id
      title
      year
      rating
      runtime
      summary
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_DETAIL_SUGGESTION_MOVIE, { variables: { movieId: +id } });
  console.log("data", data, loading);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? "Loading" : <div>{data?.getDetailMovie && <Movie key={data.getDetailMovie.id} movie={data.getDetailMovie} />}</div>}
    </div>
  );
};

export default Detail;
