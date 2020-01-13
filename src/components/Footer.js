import React from 'react';
import "../assets/css/Footer.scss";
import LogoLove  from "../assets/icons/LogoLove.svg";
import LogoReact  from "../assets/icons/LogoReact.svg";

const Footer = () => {
    return (
      
      <div className="FooterContainer">
         <p>© Fanny Bouffier 2020 - Made with <span><img className = "FooterLogo" src={LogoLove} alt="Logo-Love"/></span> &amp; <img className = "FooterLogo" src={LogoReact} alt="Logo-React"/> </p>
         <p>All rights reserved.</p>
      </div>
      
    );
  }

  export default Footer