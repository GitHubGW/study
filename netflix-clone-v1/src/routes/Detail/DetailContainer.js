import { movieApi, tvApi } from "api";
import { Component } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
  state = {
    isMovie: false,
    isTV: false,
    result: {},
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      history: { push },
      match: {
        params: { id },
      },
      location: { pathname },
    } = this.props;
    const isMovie = pathname.includes("movie");
    const isTV = pathname.includes("tv");

    if (isNaN(id)) {
      return push("/");
    }

    try {
      if (isMovie) {
        const { data } = await movieApi.movieDetail(id);
        this.setState({ isMovie, result: data, loading: false });
      } else if (isTV) {
        const { data } = await tvApi.tvDetail(id);
        this.setState({ isTV, result: data, loading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: "Failed to get detail", loading: false });
    }
  }

  render() {
    return <DetailPresenter {...this.state} />;
  }
}

export default DetailContainer;
