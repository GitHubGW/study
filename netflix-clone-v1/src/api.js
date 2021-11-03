import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "d20d691c4dcca268fa8e0c655d698616", language: "en-US" },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  topRated: () => api.get("movie/top_rated"),
  upcoming: () => api.get("movie/upcoming"),
  movieDetail: (movie_id) => api.get(`movie/${movie_id}`, { params: { append_to_response: "videos" } }),
  search: (word) => api.get("search/movie", { params: { query: word } }),
};

export const tvApi = {
  airingToday: () => api.get("tv/airing_today"),
  onTheAir: () => api.get("tv/on_the_air"),
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  tvDetail: (tv_id) => api.get(`tv/${tv_id}`, { params: { append_to_response: "videos" } }),
  search: (word) => api.get("search/tv", { params: { query: word } }),
};
