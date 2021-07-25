import React from "react";
import HomePresenter from "./HomePresenter";
import { MovieApi } from "api";
import Message from "Components/Message";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await MovieApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await MovieApi.upcoming();

      const {
        data: { results: popular },
      } = await MovieApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        error: "HomeContainer Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    // console.log(this.state);

    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading}></HomePresenter>;
  }
}

export default HomeContainer;
