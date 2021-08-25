import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const handleUseEffect = async () => {
    try {
      const instance = axios.create({
        baseURL: "https://yts.mx/api/v2/list_movies.json",
      });

      const {
        data: {
          data: { movies },
        },
      } = await instance.get("/");

      setState({
        data: movies,
        loading: false,
      });
    } catch (error) {
      setState({
        error: "Failed!",
      });
    } finally {
    }
  };

  useEffect(handleUseEffect, []);

  return state;
};

const UseAxios = () => {
  const { data, loading } = useAxios();

  return (
    <div>
      <h1>🧑🏻‍💻</h1>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data
            .filter((movie) => movie.id !== "")
            .map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image && movie.medium_cover_image}></img>
                <h2>
                  {movie.title && movie.title}({movie.year && movie.year})
                </h2>
                <h3>rating: {movie.rating && movie.rating}</h3>
                <h3>runtime: {movie.runtime && movie.runtime}</h3>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default UseAxios;
