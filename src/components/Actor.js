import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Actor() {
  const { actorId } = useParams();
  const [actorData, setActorData] = useState();
  const url = `https://imdb-api.com/API/Name/k_uy8055ru/${actorId}`;
  useEffect(() => {
    async function fun() {
      const result = await axios(url);
      console.log(result.data);
      setActorData(result.data);
    }
    fun();
  }, [url]);
  return (
    <div>
      <div className="actorCircle">
        <img src={actorData?.image} />
      </div>
      <div className="actorDetails">
        <h1>{actorData?.name}</h1>
        <h5>{actorData?.role}</h5>
        <p>{actorData?.summary}</p>
        <h2>{actorData?.awards}</h2>
      </div>
      <div className="actorMovies">
      {actorData?.knownFor?.map((movie) => (
      
          <div className="actorCard">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.image} alt="img" />
              <h3>{movie.title}</h3>
            </Link>
         
        </div>
      ))}
       </div>
    </div>
  );
}

export default Actor;
