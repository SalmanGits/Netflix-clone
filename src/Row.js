import React, { useState, useEffect } from "react";

import instance from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie, i) => {
            return (
              <img
                key={movie.id}
                className="row_poster"
                src={`${base_url}${movie.backdrop_path}`}
                alt="cover"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
