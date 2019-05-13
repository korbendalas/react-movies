import React from "react";

const actorImg =
  "http://image.tmdb.org/t/p/w154/gAXGlrS9RlNA1sxJqi9C8gVsnUB.jpg";
function Actor() {
  return (
    <div className="actor flex">
      <img src={actorImg} />
      <div className="actor__data">
        <h3 className="actor__data__name">Zachary Levi</h3>
        <p className="actor__data__movie_character">Shazam</p>
      </div>
    </div>
  );
}
export default Actor;
