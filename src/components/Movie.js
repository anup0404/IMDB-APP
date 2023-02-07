import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { movieId } = useParams();
  const [idData, setIdData] = useState();
  const [trailer, setTrailer] = useState();
  const url = `https://imdb-api.com/en/API/Title/k_uy8055ru/${movieId}`;
  useEffect(() => {
    async function fun2() {
      const result = await axios.get(url);
      setIdData(result.data);
    }
    fun2();
  }, [url]);
  const url2 = `https://imdb-api.com/en/API/Trailer/k_uy8055ru/${movieId}`;
  useEffect(() => {
    async function fun2() {
      const result = await axios.get(url2);
      setTrailer(result.data);
    }
    fun2();
  }, [url2]);
  return (
    <div>
      <div className="coverImg">
        <img  src={trailer?.thumbnailUrl}alt="img" className="coverMainImg" />
      </div>
      <div className="movieBody">
        <div className="movieContainer">
          <div className="movieRating">
            <img alt="img" src={idData?.image} />
            <p>
              <span>{idData?.imDbRating}</span>/10
            </p>
          </div>
          <div className="movieDescription">
            <h1>{idData?.title}</h1>
            <p>{idData?.year}</p>
            <p>{idData?.genres}</p>
            <p>{idData?.plot}</p>
          </div>
        </div>
        <div className="cast">
          <div className="castHeading">
            <h1>Cast</h1>
            <p>Cast overview, first billed only</p>
          </div>

          <div className="castName">
            {idData?.actorList?.map((actor) => (
              <div>
                <Link to={`/actor/${actor.id}`}>
                  <div className="castActors">
                    <div className="castCircle">
                      <img src={actor?.image} alt="img" className="cardImg" />
                    </div>
                    <div className="castActorName">
                      <h2>{actor?.name}</h2>
                      <p>{actor?.asCharacter}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
