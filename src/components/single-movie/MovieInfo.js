import React, { useState, useEffect } from "react";
import posterImg from "../../img/test/poster.jpg";
import Actor from "./Actor";
import axios from "axios";
import Spinner from "../Spinner";
const apiKey = "975095b34dd7c4ff9937603d683d6501";

//Change this after finish markup

function MovieInfo(props) {
  const [backImg, setBackImg] = useState("");

  let bgImg;
  if (backImg) bgImg = `http://image.tmdb.org/t/p/w1280/${backImg}`;

  const [title, setTitle] = useState("");
  //PLOT
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState(null);
  //Director here=>Probably on imdb
  const [director, setDirector] = useState("");

  const [runTime, setRunTime] = useState("");
  const [budget, setBudget] = useState("");
  const [revenue, setRevenue] = useState("");
  const [posterImgBackDrop, setPosterImgBackdrop] = useState("");
  //SET STATE FOR CAST *******************
  const [cast, setCast] = useState([]);

  //COMPLETE URL FOR POSTER
  let posterImg;
  if (posterImgBackDrop) {
    posterImg = `http://image.tmdb.org/t/p/w500${posterImgBackDrop}`;
  }
  //FUNCTION TO CONVERT NUMBER TO TIME
  function time_convert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
  }

  useEffect(() => {
    //Moves page to top on loading
    window.scrollTo(0, 0);
    //Get single movie data for hero single movie
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          props.match.params.id
        }?api_key=${apiKey}&language=en-US`
      )
      .then(res => {
        //Set Homepage currently most popular movie
        setBackImg(res.data.backdrop_path);
        setPosterImgBackdrop(res.data.poster_path);
        setTitle(res.data.title);
        setOverview(res.data.overview);
        setRating(res.data.vote_average);
        setGenres(res.data.genres);
        setRunTime(time_convert(res.data.runtime));
        let parseBudget = res.data.budget;
        setBudget(parseBudget.toLocaleString("en"));
        let parseRevenue = res.data.revenue;
        setRevenue(parseRevenue.toLocaleString("en"));

        // console.log("MOVIE INFO RESPONSE", res.data);

        // ************************ AXIOS CALL FOR CAST *************************
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${
              props.match.params.id
            }/credits?api_key=${apiKey}&language=en-US`
          )
          .then(res => {
            setCast(res.data.cast);
          });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="movie__info">
        {/* ****************** movie BG Image and HERO  *********  */}
        <div
          className="movie__info__header hero-image"
          style={{ backgroundImage: `url(${bgImg}) ` }}
        >
          <div className="movie__info__header__content container flex">
            <img src={posterImg} />

            <div>
              <h1> {title ? title : "Movie Title"}</h1>
              <h3>PLOT</h3>
              <p>{overview ? overview : "Description"}</p>
              <h4>GENRES</h4>
              {/* Ovde ce da ide array sa zanrovima, bice map */}
              <ul className="flex ">
                {genres
                  ? genres.map(genre => {
                      return <li>{genre.name}</li>;
                    })
                  : null}
                <li>Comedy</li>
              </ul>
              <h3>IMDB RATING</h3>

              <div className="movie__rating flex">
                <meter
                  min="0"
                  max="10"
                  optimum="10"
                  low="4"
                  high="7"
                  value={rating}
                />
                <p className="movie__rating__score">{rating ? rating : "0"}</p>
              </div>
              <h3 className="director-heading">DIRECTOR</h3>
              <p className="director-name">David F. Sandberg</p>
            </div>
          </div>
        </div>
        {/* ********************** END HERO ************************************** */}
        <div className="movie__infobar">
          <div className="container movie__infobar__container flex items-center justify-between">
            <div className="runing-time">
              <i className="far fa-clock" />
              Runing time : {runTime ? runTime : null}
            </div>
            <div className="budget">
              <i className="fas fa-money-bill-alt" />
              Budget: ${budget ? budget : null}
            </div>

            <div className="revenue">
              <i className="fas fa-ticket-alt" />
              Revenue : {revenue ? revenue : null}
            </div>
          </div>
        </div>

        <section className="actors">
          <h1>Actors</h1>
          {/* flex justify-between flex-wrap */}
          <div className="actors__container ">
            {cast
              ? cast.map(actor => (
                  <Actor
                    name={actor.name}
                    character={actor.character}
                    img={actor.profile_path}
                  />
                ))
              : null}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default MovieInfo;
