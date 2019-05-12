import React from "react";
import { Link } from "react-router-dom";
import MovieInfo from "../single-movie/MovieInfo";

function Movie(props) {
  let posterUrl = `http://image.tmdb.org/t/p/w500/${props.poster}`;
  return (
    <Link to={`/${props.id}`} component={MovieInfo}>
      <div className="movie">
        <img src={posterUrl} alt="single movie" />
      </div>
    </Link>
  );
}
export default Movie;
