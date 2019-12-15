import React from 'react';
import { Link } from "react-router-dom";

import Logo  from "../assets/icons/LogoFB.svg";
import "../_GlobalStyle.scss";
import "../assets/css/Navbar.scss"

const Navbar = (props) => {
    return (
      <div className= "NavbarContainer">
      <Link path to="/" ><img className = "NavbarLogo" src={Logo} alt="Logo-FannyBouffier"/></Link>
      <div>{props.content}</div>
      <div className="ContactsDisplayCase">{props.content2}</div>
      </div>
    );
  }

  export default Navbar