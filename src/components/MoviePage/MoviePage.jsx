import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Style from "../MoviePage/MoviePage.module.css";
import gradient from "../MoviePage/gradientMoviePage.svg";
const APIKEY = "f6a7cdcdf6d11525cb7e986cec064e61";

function MoviePage({ backdrop, description, name }) {
  const params = useParams();
  const id = params.id;
  const [movie, setMovie] = useState([]);
  const [genres,setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-ES`
      )
      .then((data) => {
        setMovie(data.data);
        setGenres(data.data.genres)
        document.title= data.data.original_title + ' • Hack Max'
    });
  }, []);

  return ( 
  
    <div className={Style.MoviePage}>
      <div className={Style.movieData}>
        <img id={Style.imgPoster} src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt="" />
        <div className={Style.texts}>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
            <div className={Style.genres}>
                {genres.map(e => <span>{e.name}</span>)}
            </div>
        </div>    
      </div>
      <img id={Style.imgBack}
        src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
        alt="Movie backdrop"
      />
      <img id={Style.gradient} src={gradient} alt="" />
    </div>
  )
}

export default MoviePage;
