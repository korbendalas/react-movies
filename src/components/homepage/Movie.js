import React from "react";
import { Link } from "react-router-dom";
import MovieInfo from "../single-movie/MovieInfo";

function Movie(props) {
  let posterUrl = `http://image.tmdb.org/t/p/w342/${props.poster}`;
  // //Splits movie name into array by whitespace
  // let str = props.name;
  // const splitStr = [];
  // splitStr = str.split("\\s+");

  console.log(props.title);
  let placeholder = `https://via.placeholder.com/280x424.png?text=${
    props.title ? props.title : "Movie Title"
  }`;

  return (
    <Link to={`/${props.id}`} component={MovieInfo} className="movie">
      <img src={props.poster ? posterUrl : placeholder} alt="single movie" />
    </Link>
  );
}
export default Movie;
