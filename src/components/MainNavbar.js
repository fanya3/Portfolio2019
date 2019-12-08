import React from 'react';
import { Link } from "react-router-dom";
import Logo  from "../assets/icons/LogoFB.svg";
import "../_GlobalStyle.scss";
import "./Navbar.scss"

const MainNavbar = () => {
    return (
      
      <div className="MainNavbarContainer">
         <Link path to="/" ><img className = "NavbarLogo" src={Logo} alt="Logo-FannyBouffier"/></Link>
      </div>
     
      
    );
  }

  export default MainNavbar