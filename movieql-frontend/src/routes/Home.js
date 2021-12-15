import { useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import gql from "graphql-tag";

const GET_ALL_MOVIES = gql`
  query {
    getAllMovies {
      id
      title
      year
      rating
      runtime
      medium_cover_image
      isLiked @client
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_MOVIES);

  return (
    <div>
      <h1>Home</h1>
      <h2>{error && error.message}</h2>
      {loading ? "Loading" : <div>{data && data?.getAllMovies?.map((movie) => <Movie key={movie.id} movie={movie} />)}</div>}
    </div>
  );
};

export default Home;
