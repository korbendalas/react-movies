import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import Movies from "./Movies";

function Homepage(props) {
  return (
    <div className="homepage">
      <HeroImage />
      <Movies />

      <button>Increase counter</button>
    </div>
  );
}
export default Homepage;
