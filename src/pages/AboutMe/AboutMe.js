import React from "react";
import "./AboutMe.scss";
import { Link } from 'react-router-dom'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AboutMe = () => {
  return (
    <div className="AboutMeContainer">
      <Navbar/>
      <div className="AboutMeMain">About Me!
      <Link path to="/">back</Link></div>
      
      <Footer/>
    </div>
  );
};

export default AboutMe;
