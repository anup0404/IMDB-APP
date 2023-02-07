import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchResult() {
  const { movie } = useParams();
  const [data, setData] = useState();
  const url = `https://imdb-api.com/en/API/Search/k_uy8055ru/${movie}`;
  useEffect(() => {
    async function fun1() {
      const result = await axios.get(url);
      setData(result.data.results);
      console.log(result.data.results);
    }
    fun1();
  }, [url]);
  return (
    <div className="movieCards">
      {data?.map((movie) => {
        return (
          <div className="movieCard">
            <Link to={`/movie/${movie.id}`} className="searchLink">
              <img alt="img" src={movie.image} className="searchImg" />
              <h2 className="searchTitle">{movie.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
