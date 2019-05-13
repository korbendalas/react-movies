import React from "react";
import { Link } from "react-router-dom";
import MovieInfo from "../single-movie/MovieInfo";

function Movie(props) {
  let posterUrl = `http://image.tmdb.org/t/p/w342/${props.poster}`;
  return (
    <Link to={`/${props.id}`} component={MovieInfo} className="movie">
      <img src={posterUrl} alt="single movie" />
    </Link>
  );
}
export default Movie;
