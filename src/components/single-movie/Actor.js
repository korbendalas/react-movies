import React from "react";

function Actor(props) {
  let actorImg;
  if (props.img) actorImg = `http://image.tmdb.org/t/p/w154${props.img}`;

  return (
    <div className="actor flex">
      <img src={actorImg} />
      <div className="actor__data">
        <h3 className="actor__data__name">
          {props.name ? props.name : "Actor Name"}
        </h3>
        <p className="actor__data__movie_character">
          {props.character ? props.character : "Character"}
        </p>
      </div>
    </div>
  );
}
export default Actor;
