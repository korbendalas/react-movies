import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import Movies from "./Movies";

import { Context } from "../../context/Provider";

function Homepage(props) {
  const {
    mostPopularMovie,
    popularMovies,
    fetchPopularMovies
  } = React.useContext(Context);

  return (
    <div className="homepage">
      <HeroImage
        heading={mostPopularMovie.heading}
        description={mostPopularMovie.description}
        backdrop_path={mostPopularMovie.backdrop_path}
      />

      <Movies />
    </div>
  );
}
export default Homepage;
