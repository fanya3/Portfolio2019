import React from 'react';
import { Link } from "react-router-dom";

import Contacts from './Contacts'

import Logo  from "../assets/icons/LogoFB.svg";
import LogoHorizontal  from "../assets/icons/LogoFBHorizontal.svg";
import "../_GlobalStyle.scss";
import "../assets/css/Navbar.scss"
import "../assets/css/Homepage.scss"

const MainNavbar = () => {
    return (
      <>
        <div className="MainNavbarContainer">
          <Link to="/" ><img className="NavbarLogo" src={Logo} alt="Logo-FannyBouffier" /></Link>
          <Link to="/"><img className="NavbarLogoHorizontal" src={LogoHorizontal} alt="Logo-FannyBouffier"/></Link>
        </div>
        <div className="ContactsHomepage">
          <Contacts color={"white"} />
        </div>
      </>
    );
  }

  export default MainNavbar