import { tvApi } from "api";
import { Component } from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends Component {
  state = {
    airingToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: onTheAir },
      } = await tvApi.onTheAir();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      this.setState({ airingToday, onTheAir, popular, topRated, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: "Failed to get tv.", loading: false });
    }
  }

  render() {
    return <TVPresenter {...this.state} />;
  }
}

export default TVContainer;
