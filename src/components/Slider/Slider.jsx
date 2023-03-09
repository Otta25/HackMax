import React, { useState, useEffect } from "react";
import Style from "../Slider/Slider.module.css";
import video1 from "../Slider/v6.mp4";
import video2 from "../Slider/v8.mp4";
import video3 from "../Slider/v9.mp4";
import imgRick from "../Slider/tile3.jpg";
import imgGot from "../Slider/tile2.jpg";
import imgTlou from "../Slider/tile.jpg";
import HeroVideo from "../HeroVideo/HeroVideo";
import logoRick from "../Slider/rick.png";
import logoGot from "../Slider/got.png";
import logoTlou from "../Slider/tlou.png";


function Slider() {
  const [sliderCounter, setSliderCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSliderCounter(sliderCounter + 1);
    }, 30000);
    if (sliderCounter >= 3) {
      setSliderCounter(0);
    }
  }, [sliderCounter]);

  if (sliderCounter === 0) {
    return (
        <div className={Style.Slider}>
          <HeroVideo video={video1} logo={logoRick} imagen={imgRick} />
        </div>
    );
  }
  if (sliderCounter === 1) {
    return (
      <div className={Style.Slider}>
        <HeroVideo video={video2} logo={logoGot} imagen={imgGot} />
      </div>
    );
  }
  if (sliderCounter === 2) {
    return (
      <div className={Style.Slider}>
        <HeroVideo video={video3} logo={logoTlou} imagen={imgTlou} />
      </div>
    );
  }
}

export default Slider;
