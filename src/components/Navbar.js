import React from 'react';
import { Link } from "react-router-dom";

import Logo  from "../assets/icons/LogoFB.svg";
import LogoHorizontal  from "../assets/icons/LogoFBHorizontal.svg";
import "../_GlobalStyle.scss";
import "../assets/css/Navbar.scss"


const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll === 0) {
    body.classList.add(scrollUp);
    return;
  }

  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});



const Navbar = (props) => {
    return (
      <>
      <div className= "NavbarContainer">
      <Link  to="/" className = "NavbarLogoLink"><img className = "NavbarLogo" src={Logo} alt="Logo-FannyBouffier"/></Link>
      <Link  to="/" className = "NavbarLogoHorizontalLink"><img className = "NavbarLogoHorizontal" src={LogoHorizontal} alt="Logo-FannyBouffier"/></Link>
      {props.content}
      </div>
       <div className="ContactsDisplayCase">{props.content2}</div>
       </>
    );
  }

  export default Navbar