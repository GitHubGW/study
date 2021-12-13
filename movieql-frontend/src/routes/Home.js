import { gql, useQuery } from "@apollo/client";

const GET_ALL_MOVIES = gql`
  query {
    getAllMovies {
      id
      title
      year
      rating
      runtime
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_MOVIES);
  console.log("data", data);

  return (
    <div>
      <h1>Home</h1>
      <h2>{error && error.message}</h2>
      {loading ? (
        "Loading"
      ) : (
        <div>
          {data &&
            data?.getAllMovies?.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <h3>
                  {movie.title} ({movie.year})
                </h3>
                <h5>
                  🌠{movie.rating}, {movie.runtime}분
                </h5>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
