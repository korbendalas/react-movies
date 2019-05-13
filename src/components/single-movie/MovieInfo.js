import React from "react";
import posterImg from "../../img/test/poster.jpg";
import Actor from "./Actor";

//Change this after finish markup
const bgImg = "http://image.tmdb.org/t/p/w1280/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg";

function MovieInfo(props) {
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
              <h1>Movie Title</h1>
              <h3>PLOT</h3>
              <p>
                SOME DESCRIPTION A boy is given the ability to become an adult
                superhero in times of need with a single magic word.
              </p>
              <h4>GENRES</h4>
              {/* Ovde ce da ide array sa zanrovima, bice map */}
              <ul className="flex">
                <li>Comedy</li>
                <li>Adventure</li>
                <li>Fantasy</li>
                <li>Action</li>
              </ul>
              <h3>IMDB RATING</h3>

              <div class="movie__rating flex">
                <meter
                  min="0"
                  max="10"
                  optimum="100"
                  low="4"
                  high="7"
                  value="2"
                />
                <p class="movie__rating__score">7.2</p>
              </div>
              <h3 className="director-heading">DIRECTOR</h3>
              <p className="director-name">David F. Sandberg</p>
            </div>
          </div>
        </div>
        {/* ********************** END HERO ************************************** */}
        <section className="movie__infobar">
          <div className="container movie__infobar__container flex items-center justify-between">
            <div className="runing-time">
              <i class="far fa-clock" />
              Runing time
            </div>
            <div className="budget">
              <i class="fas fa-money-bill-alt" />
              Budget
            </div>

            <div className="revenue">
              <i class="fas fa-ticket-alt" />
              Revenue
            </div>
          </div>
        </section>

        <section className="actors">
          <h1>Actors</h1>
          <div className="actors__container flex justify-between flex-wrap">
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
            <Actor />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default MovieInfo;
