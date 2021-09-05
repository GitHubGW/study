import React from "react";
import axios from "axios";
import Loading from "./Loading";
import Article from "./Article";

class App extends React.Component {
  state = {
    articles: [],
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const {
        data: { articles },
      } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      this.setState({ articles });
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { articles, error, loading } = this.state;

    return (
      <div>
        {loading ? <Loading></Loading> : <>{error ? <h1>Error!</h1> : articles.map((article) => <Article key={article.title} {...article}></Article>)}</>}
      </div>
    );
  }
}

export default App;
