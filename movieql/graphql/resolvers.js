import axios from "axios";

const API_URL = "https://yts.mx/api/v2";

const resolvers = {
  Query: {
    getAllMovies: async () => {
      const {
        data: {
          data: { movies: allMovies },
        },
      } = await axios.get(`${API_URL}/list_movies.json`);
      return allMovies;
    },

    getDetailMovie: async (_, { movieId }) => {
      const {
        data: {
          data: { movie: detailMovie },
        },
      } = await axios.get(`${API_URL}/movie_details.json?movie_id=${movieId}`);
      if (detailMovie.id === 0) {
        return null;
      }
      return detailMovie;
    },

    getSuggestionMovies: async (_, { movieId }) => {
      const {
        data: {
          data: { movies: suggestionMovie },
        },
      } = await axios.get(`${API_URL}/movie_suggestions.json?movie_id=${movieId}`);
      if (!suggestionMovie) {
        return null;
      }
      return suggestionMovie;
    },
  },
};

export default resolvers;
