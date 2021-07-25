import React from "react";
import SearchPresenter from "./SearchPresenter";
import { MovieApi, TVApi } from "api";

class SearchContainer extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  updateTerm = (event) => {
    // console.log(event.target.value);

    const {
      target: { value },
    } = event;

    this.setState({
      searchTerm: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;

    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;

    try {
      const {
        data: { results: movieResult },
      } = await MovieApi.search(searchTerm);

      const {
        data: { results: tvResult },
      } = await TVApi.search(searchTerm);

      this.setState({
        movieResult,
        tvResult,
        loading: true,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        error: "SearchContainer Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResult, tvResult, searchTerm, error, loading } = this.state;
    // console.log(this.state);

    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      ></SearchPresenter>
    );
  }
}

export default SearchContainer;
