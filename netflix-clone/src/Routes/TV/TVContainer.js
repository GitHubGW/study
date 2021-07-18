import { TVApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await TVApi.topRated();

      const {
        data: { results: popular },
      } = await TVApi.popular();

      const {
        data: { results: airingToday },
      } = await TVApi.airingToday();

      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        error: "TVContainer Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    // console.log(this.state);

    return <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading}></TVPresenter>;
  }
}

export default TVContainer;
