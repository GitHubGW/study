import React from "react";
import DetailPresenter from "./DetailPresenter";
import { MovieApi, TVApi } from "api";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    // console.log(this.props);

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    this.isMovie = pathname.includes("/movie/");
    this.isTV = pathname.includes("/tv/");

    try {
      if (this.isMovie) {
        const { data } = await MovieApi.movieDetail(parsedId);

        this.setState({
          result: data,
        });
      }

      if (this.isTV) {
        const { data } = await TVApi.tvDetail(parsedId);

        this.setState({
          result: data,
        });
      }
    } catch (error) {
      console.log(error);

      this.setState({
        error: "DetailContainer Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    // console.log(this.props);

    const { result, error, loading } = this.state;
    // console.log(this.state);

    return <DetailPresenter result={result} error={error} loading={loading}></DetailPresenter>;
  }
}

export default DetailContainer;
