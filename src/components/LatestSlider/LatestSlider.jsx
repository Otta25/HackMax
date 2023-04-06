import React, { useEffect, useRef,useState } from 'react'
import Movie from '../Movie/Movie'
import Style from '../LatestSlider/LatestSlider.module.css'
import rightChevron from '../LatestSlider/chevron-right.svg'
import leftChevron from '../LatestSlider/chevron-left.svg'
import axios from 'axios'
import Slider from "react-slick";

const APIKEY = "f6a7cdcdf6d11525cb7e986cec064e61";

function LatestSlider() {
const[movies,setMovies]=useState([])

useEffect(()=>{
 axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US`)
 .then(data => setMovies(data.data.results))
},[])


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <img src={rightChevron} className={Style.rightChevron} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <img src={leftChevron} className={Style.leftChevron} onClick={onClick} />;
}

const settings = {
  slidesToShow: 8,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

return (
  <>
    <div className='mt-[40vh]'>
      <Slider className='px-[4rem]' {...settings}>
        {movies?.map((movie) => (
          <Movie
            key={movie.id}
            poster={movie.poster_path}
            id={movie.id}
          />
        ))}
      </Slider>
      </div>
  </>
);
}

export default LatestSlider