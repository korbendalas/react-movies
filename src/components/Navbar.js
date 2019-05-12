import React from "react";
import { Link } from "react-router-dom";
import headerLogo1 from "../img/header_logo.png";
import headerLogo2 from "../img/tmdb_logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container flex mx-auto justify-between xl">
        <Link to="/">
          <img src={headerLogo1} className="navbar__img1" alt="Main Logo" />
        </Link>
        <img src={headerLogo2} className="navbar__img2" alt="Main Logo" />
      </div>
    </div>
  );
}
