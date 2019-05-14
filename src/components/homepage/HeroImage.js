import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { Context } from "../../context/Provider";

function HeroImage(props) {
  const { heading, description, backdrop_path } = props;
  const { showSpinner } = React.useContext(Context);

  let img;
  if (props.backdrop_path) {
    img = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  }

  return (
    <div className={`hero-image`} style={{ backgroundImage: `url(${img}) ` }}>
      {showSpinner ? (
        <div className="spinner-backdrop flex justify-center items-center">
          <div className="spinner-on-load">
            <Spinner />
          </div>
        </div>
      ) : null}

      <div className="hero-image__gradient">
        <div className="hero-image__content container  mr-auto ml-auto mt-0 mb-0">
          <div className="hero-image__content__text ">
            <h1 className=" "> {heading ? heading : "Title"} </h1>
            <p>{description ? description : "Description"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
