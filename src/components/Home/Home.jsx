import React from 'react'
import Slider from '../Slider/Slider';
import LatestSlider from '../LatestSlider/LatestSlider'
import Recomendation from '../Recomendation/Recomendation'

function Home() {
  document.title = 'Hack Max'
  return (
    <>
        <Slider></Slider>
        <LatestSlider/>
        <Recomendation/>
    </>
  )
}

export default Home