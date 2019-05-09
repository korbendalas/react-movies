import React from "react";

const img = "http://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg";
function HeroImage() {
  return (
    <div className={`hero-image`} style={{ backgroundImage: `url(${img}) ` }}>
      <div className="hero-image__gradient">
        <div className="hero-image__content container  mr-auto ml-auto mt-0 mb-0">
          <div className="hero-image__content__text ">
            <h1 className=" "> Avengers: Endgame </h1>
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
