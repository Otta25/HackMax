import React, { useEffect, useState } from "react";
import Style from "../HeroVideo/HeroVideo.module.css";
import gradient from "../Slider/gradienthero.svg";

function HeroVideo({ video, logo, imagen, id }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.onresize = function () {
      if (window.innerWidth <= 600) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
  });

  if (mobile) {
    return (
      <>
        <img className={Style.HeroImage} src={imagen} alt="" />
        <div className={Style.logoContainer}>
          <img src={logo} alt="Imagen serie" />
          <span>Las historias que amas y nuevas por descubrir</span>
          <h2>Emocionate con estrenos de peliculas y series iconicas</h2>
          <a href={id}>VER AHORA</a>
        </div>
        <img className={Style.gradient} src={gradient} alt="" />
      </>
    );
  } else {
    return (
      <>
        <video src={video} autoPlay loop muted></video>
        <div className={Style.logoContainer}>
          <img src={logo} alt="Imagen serie" />
          <span>Las historias que amas y nuevas por descubrir</span>
          <h2>Emocionate con estrenos de peliculas y series iconicas</h2>
          <a href={id}>VER AHORA</a>
        </div>
        <img className={Style.gradient} src={gradient} alt="" />
      </>
    );
  }
}

export default HeroVideo;
