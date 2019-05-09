import React from "react";
import movie from "../img/movie.jpeg";
function Movie() {
  return (
    <div className="movie">
      <img src={movie} alt="single movie" />
    </div>
  );
}
export default Movie;
