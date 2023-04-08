import React, { useState } from 'react'
import Slider from '../Slider/Slider';
import LatestSlider from '../LatestSlider/LatestSlider'
import Recomendation from '../Recomendation/Recomendation'
import Celebrating from '../Celebrating/Celebrating';
import SliderComedy from '../SliderComedy/SliderComedy';
import Aside from '../Aside/Aside';


function Home() {
  document.title = 'Hack Max'

  return (
    <div>
        <Slider></Slider>
        <LatestSlider/>
        <Celebrating/>
        <SliderComedy/>
    </div>
  )
}

export default Home