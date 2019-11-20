import React from "react";
import "./AboutMe.scss";
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className="Homepage">
      About Me!
      <Link path to="/">back</Link>
    </div>
  );
};

export default AboutMe;
