import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Style from "../Movie/Movie.module.css";
import MoviePage from "../MoviePage/MoviePage";
import playSymbol from '../../assets/img/triangle-play.png';
import plusSymbol from '../../assets/img/plus-512.webp';
const APIKEY = "f6a7cdcdf6d11525cb7e986cec064e61";

function Movie({ poster, id }) {
  const [mouseOver, setMouseOver] = useState(false);

  if (mouseOver===false) {
    return (
      <NavLink
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        to={"/peliculas/" + id}
        className={Style.MovieOnMouseOver}
      >
        <img
          src={"https://image.tmdb.org/t/p/original/" + poster}
          alt="Movie poster"
        />
      </NavLink>
    );
  } else {
    return (
      <div className="relative">
      <NavLink
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
        to={"/peliculas/" + id}
        className={Style.Movie}
      >
        <img
          src={"https://image.tmdb.org/t/p/original/" + poster}
          alt="Movie poster"
        />
      </NavLink>
         <div className="absolute bottom-3 right-3 flex gap-2">
           <button className="w-10 h-10 rounded-full bg-bgPrimaryColor opacity-90 flex items-center justify-center ">
              <img src={playSymbol} className="w-5 h-5 ml-1" alt="" />
           </button>
           <button className="w-10 h-10 rounded-full bg-bgPrimaryColor opacity-90 flex items-center justify-center ">
              <img src={plusSymbol} className="w-5 h-5" alt="" />
           </button>
        </div>
      </div>
    );
  }
}

export default Movie;
