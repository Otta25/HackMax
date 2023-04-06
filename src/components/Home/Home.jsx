import React from 'react'
import Slider from '../Slider/Slider';
import LatestSlider from '../LatestSlider/LatestSlider'
import Recomendation from '../Recomendation/Recomendation'
import Celebrating from '../Celebrating/Celebrating';
import SliderComedy from '../SliderComedy/SliderComedy';

function Home() {
  document.title = 'Hack Max'
  return (
    <div className='home flex flex-col'>
        <Slider></Slider>
        <LatestSlider/>
        <Celebrating/>
        <SliderComedy/>
    </div>
  )
}

export default Home