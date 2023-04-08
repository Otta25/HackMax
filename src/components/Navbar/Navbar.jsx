import React, { useState, useEffect } from "react";
import logo from "../Navbar/logohackmax.svg";
import Style from "../Navbar/Navbar.module.css";
import burger from "../Navbar/burgermenu.svg";
import lupa from "../Navbar/lupa.png";
import { Link } from "react-router-dom";


function Navbar() {
  const [userHasScrolled, setUserHasScrolled] = useState(false);



  useEffect(() => {
    window.onscroll = function (e) {
      if (Math.ceil(window.pageYOffset) > 0) {
        setUserHasScrolled(true);
      } else {
        setUserHasScrolled(false);
      }
    };
  }, [userHasScrolled]);

  if (userHasScrolled) {
      return (
        <div>
        <nav className={Style.NavbarInScroll}>
          <div className="burger">
            <ul>
              <li>
                <img id={Style.burger} src={burger} alt="burger image" />
              </li>
            </ul>
          </div>
          <Link to="/">
            <img id={Style.logo} className="ml-3" src={logo} alt="Logo Hack Max" />
          </Link>
          <div className="searchbox">
            <ul>
              <Link to="/buscar">
                <li>
                  <img id={Style.lupa} src={lupa} alt="" />
                </li>
              </Link>
              <li>Iniciar</li>  
            </ul>
          </div>
        </nav>
        </div>
      );
    }
      else {
      return (
        <nav className={Style.Navbar}>
          <div className="burger">
            <ul>
              <li>
                <img id={Style.burger} src={burger} alt="burger image" />
              </li>
            </ul>
          </div>
          <Link to="/">
            <img id={Style.logo} src={logo} alt="Logo Hack Max" />
          </Link>
          <div className="searchbox">
            <img src="" alt="" />
            <ul>
              <Link to="/buscar">
                <li>
                  <img id={Style.lupa} src={lupa} alt="" />
                </li>
              </Link>
              <li>Iniciar</li>  
            </ul>
          </div>
        </nav>
      );
    }
  }


export default Navbar;
