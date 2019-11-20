import React from "react";
import "./Homepage.scss";
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="Homepage">
      Welcome!
      <Link path to="/about-me">About Me</Link>
    </div>
  );
};

export default Homepage;
