import React from "react";
import axios from "axios";
import Loading from "./Loading";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    movies: [],
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=year&order_by=desc");
      this.setState({ movies });
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movies, error, loading } = this.state;

    return <div>{loading ? <Loading></Loading> : <>{error ? <h1>Error!</h1> : movies.map((movie) => <Movie key={movie.id} {...movie}></Movie>)}</>}</div>;
  }
}

export default App;
