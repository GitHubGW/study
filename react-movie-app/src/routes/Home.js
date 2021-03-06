import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import React from "react";
import axios from "axios";

const URL =
  "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(URL);
    const {
      data: {
        data: { movies },
      },
    } = response;

    this.setState({ isLoading: false, movies: movies });
  }

  render() {
    const { isLoading, movies } = this.state;
    // console.log(movies);

    return (
      <>
        <h2>
          {isLoading ? (
            "Loading..."
          ) : (
            <div>
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    rating={movie.rating}
                    summary={movie.summary.slice(0, 50)}
                    title={movie.title}
                    year={movie.year}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
          )}
        </h2>
        <h1>Home</h1>
        <footer>
          <h1>{new Date().getFullYear()} Movie.</h1>
        </footer>
      </>
    );
  }
}

export default Home;
