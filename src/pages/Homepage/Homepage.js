import React from "react";
import "./Homepage.scss";
import Footer from "../../components/Footer";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/MainNavbar";

const Homepage = () => {
  return (
    <>
      <div className="HomepageContainer">
        <MainNavbar />
        <div className="HomepageIntro">Hello!</div>
        <div className="HomepageWhatIDo">
          <Link className="HomepageLink" path to="/about-me">
            About Me
          </Link>
        </div>
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
