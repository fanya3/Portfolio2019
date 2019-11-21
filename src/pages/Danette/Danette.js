import React from "react";
import "../CaseDisplay.scss";
import { Link } from 'react-router-dom'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Danette = () => {
  return (
    <div className="CaseContainer">
      <Navbar/>
      <div className="CaseDisplay">
        <h2>Danette</h2>
        <Link path to='/lubees'>next project</Link>
        <Link path to='/ohmyg'>previous project</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Danette;