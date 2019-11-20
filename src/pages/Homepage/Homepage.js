import React from "react";
import "./Homepage.scss";
import Gallery from "./Gallery";
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="Homepage">
      Welcome!
      <Link path to="/about-me">About Me</Link>
      <Gallery/>
    </div>
  );
};

export default Homepage;
