import React, { useEffect, useState } from "react";
import Style from "../HeroVideo/HeroVideo.module.css";
import gradient from "../Slider/gradienthero.svg";
import { Link } from "react-router-dom";

function HeroVideo({ video, logo, imagen, id }) {
  const [image, setImage] = useState(false);

    return (
      <>
        <video
          src={video}
          className="w-[100vw] h-[100vh] object-cover bg-bgTertiaryColor"
          autoPlay
          loop
          muted
        ></video>
        <div className={Style.logoContainer}>
          <img src={logo} alt="Imagen serie" />
          <span>Las historias que amas y nuevas por descubrir</span>
          <h2>Emocionate con estrenos de peliculas y series iconicas</h2>
          <Link to={id}>
            VER AHORA
          </Link>
        </div>
        <img className={Style.gradient} src={gradient} alt="" />
      </>
    );
}

export default HeroVideo;
