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

  handleSubmit = async () => {
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
        this.setState({ error: "Failed to find movie and tv." });
      }
    }
  };

  render() {
    return <SearchPresenter {...this.state} handleSubmit={this.handleSubmit} />;
  }
}

export default SearchContainer;
