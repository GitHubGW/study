import { movieApi, tvApi } from "api";
import { Component } from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  state = {
    movieResult: [],
    tvResult: [],
    word: "",
    error: null,
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { word } = this.state;
    if (word !== "") {
      try {
        const {
          data: { results: movieResult },
        } = await movieApi.search(word);
        const {
          data: { results: tvResult },
        } = await tvApi.search(word);

        this.setState({ movieResult, tvResult, loading: true });
      } catch (error) {
        console.log(error);
        this.setState({ error: "Failed to find movie or tv." });
      }
    }
  };

  onChange = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ word: value });
  };

  render() {
    return <SearchPresenter {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} />;
  }
}

export default SearchContainer;
