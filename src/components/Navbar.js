import React from 'react';
import { Link } from "react-router-dom";
import Logo  from "../assets/icons/LogoFB.svg";

const Navbar = (props) => {
    return (
      <div className= "NavbarContainer">
      <Link path to="/" ><img className = "NavbarLogo" src={Logo} alt="Logo-FannyBouffier"/></Link>
      {props.content}
      </div>
    );
  }

  export default Navbar