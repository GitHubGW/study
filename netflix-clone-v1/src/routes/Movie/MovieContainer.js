import { movieApi } from "api";
import { Component } from "react";
import MoviePresenter from "./MoviePresenter";

class MovieContainer extends Component {
  state = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: topRated },
      } = await movieApi.topRated();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      this.setState({ nowPlaying, popular, topRated, upcoming, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: "Failed to get movie.", loading: false });
    }
  }

  render() {
    return <MoviePresenter {...this.state} />;
  }
}

export default MovieContainer;
