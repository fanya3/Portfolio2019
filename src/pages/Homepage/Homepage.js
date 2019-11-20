import React from "react";
import "./Homepage.scss";
import Footer from "../../components/Footer";
import Gallery from "./Gallery";
import { Link } from 'react-router-dom'
import MainNavbar from "../../components/MainNavbar";


const Homepage = () => {
  return (
    <>
    <div className="Homepage">
      <MainNavbar />
      <Link path to="/about-me">About Me</Link>
      <Gallery />
      <Footer />
    </div>
    </>
  );
};

export default Homepage;
