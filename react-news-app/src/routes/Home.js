import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Article from "../components/Article";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAPI = async () => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const {
        data: { articles },
      } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      setArticles(articles);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <h1>Home</h1>
          {error && <h2>{error}</h2>}
          {articles && articles.map((article) => <Article key={article.title} {...article}></Article>)}
        </>
      )}
    </>
  );
};

export default Home;
