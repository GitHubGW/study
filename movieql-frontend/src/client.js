import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { movieId }, { cache }) => {
        // cache.modify()를 통해 cache ID가 Movie:${movieId}인 영화의 fields중에 isLiked를 수정함
        cache.modify({
          id: `Movie:${movieId}`,
          fields: { isLiked: (isLiked) => !isLiked },
        });
      },
    },
  },
});

export default client;
