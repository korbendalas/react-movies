import React from 'react'
import headerLogo1 from '../img/header_logo.png';
import headerLogo2 from '../img/tmdb_logo.png';

export default function Navbar() {
  return (
    <div className="navbar  bg-black ">
    <div className="navbar__container flex mx-auto">
     <img src={headerLogo1} className="navbar__img1" alt="Main Logo" />
     <img src={headerLogo2} className="navbar__img2" alt="Main Logo"/>
     </div>
    </div>
  )
}
