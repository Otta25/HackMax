import React, { useEffect, useRef,useState } from 'react'
import Movie from '../Movie/Movie'
import Style from '../LatestSlider/LatestSlider.module.css'
import rightChevron from '../LatestSlider/chevron-right.svg'
import leftChevron from '../LatestSlider/chevron-left.svg'
import axios from 'axios'

const APIKEY = "f6a7cdcdf6d11525cb7e986cec064e61";

function LatestSlider() {
const positionRef = useRef()
const[movies,setMovies]=useState([])

useEffect(()=>{
 axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US`)
 .then(data => setMovies(data.data.results))
},[])

console.log(movies)

  return (
    <div className={Style.LatestSliderContainer}> 
    <h2>Episodios Gratuitos</h2>
    <span>Disfruta de episodios completos gratuitos y sin necesidad de una suscripción</span>
    <img onClick={()=> positionRef.current.scrollLeft-=650 } className={Style.leftChevron} src={leftChevron} alt="left chevron" />
      <div ref={positionRef} className={Style.LatestSlider}>
          {movies.map(movie =>  <Movie key={movie.id} id={movie.id} poster={movie.poster_path} />)}
      </div>
      <img onClick={()=> positionRef.current.scrollLeft+=650 } className={Style.rightChevron} src={rightChevron} alt="right chevron" />
    </div>
  )
}

export default LatestSlider