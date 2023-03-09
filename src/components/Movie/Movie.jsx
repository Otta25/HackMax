import React from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Style from '../Movie/Movie.module.css'
import MoviePage from '../MoviePage/MoviePage';
const APIKEY = "f6a7cdcdf6d11525cb7e986cec064e61";


function Movie({poster,id}) {
  return (
    <NavLink to={'/peliculas/'+id} className={Style.Movie}>
       <img src={'https://image.tmdb.org/t/p/original/'+poster} alt="Movie poster" />
    </NavLink>
  )
}

export default Movie