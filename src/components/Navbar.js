import React from 'react';
import { Link } from "react-router-dom";

import Logo  from "../assets/icons/LogoFB.svg";
import LogoHorizontal  from "../assets/icons/LogoFBHorizontal.svg";
import "../_GlobalStyle.scss";
import "../assets/css/Navbar.scss"

const Navbar = (props) => {
    return (
      <>
      <div className= "NavbarContainer">
      <Link path to="/" className = "NavbarLogoLink"><img className = "NavbarLogo" src={Logo} alt="Logo-FannyBouffier"/></Link>
      <Link path to="/" className = "NavbarLogoHorizontalLink"><img className = "NavbarLogoHorizontal" src={LogoHorizontal} alt="Logo-FannyBouffier"/></Link>
      {props.content}
      </div>
       <div className="ContactsDisplayCase">{props.content2}</div>
       </>
    );
  }

  export default Navbar