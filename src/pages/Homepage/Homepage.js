import React, { Component } from "react";
import "./Homepage.scss";
import Footer from "../../components/Footer";
import Gallery from "./Gallery";
import ButtonsGallery from "./ButtonsGallery"
import { Link } from "react-router-dom";
import Hello from "../../assets/icons/Hello.svg";
import And from "../../assets/icons/And.svg";
import MainNavbar from "../../components/MainNavbar";
import { PROJECTS } from "../../non-components/Projects";

class Homepage extends Component {

  state = {
    cards: PROJECTS,
    cardFilter: null
  };


  cardFilterSelect = (filterName) => {
    this.setState({ cardFilter: filterName });
  };

  render() {
    return (
      <>
        <div className="HomepageContainer">
          <MainNavbar />

          <div className="HomepageIntro">
            <div className="HomepageHelloContainer">
              <img className="HomepageHelloLogo" src={Hello} alt="hello logo" />
              <p className="HomepageHelloText">
                I’m a lively cheerful senior designer <br />
                &amp; creative developer!
              </p>
              <p className="HomepageHelloLegend">
                <span className="LegendSuperBold">!</span>
                <span className="LegendBold">
                  = I am often told that I speak loudly :&#41;
                </span>{" "}
                <br />
                Fortunately, this is what I like to do in my job, helping brands
                and entrepreneurs to state loud and clear and make the
                difference in the market!
              </p>
            </div>
          </div>

          <div className="HomepageWhatIDo">
            <div className="WhatIDoBlock">
              <h2 className="blackTitle1">WHAT I DO</h2>
              <div className="WhatIDoBlockText">
                <h3 className="WhatIDoTitle">I DESIGN</h3>
                <p>
                  Identities, Packaging, print supervision, Identities,
                  Strategic development, print supe as well as printing
                  supervision
                </p>
              </div>
              <div className="Between">
                <img className="And" src={And} alt=" zz" />
              </div>
              <div className="WhatIDoBlockText">
                <h3 className="WhatIDoTitle green">I DEVELOP</h3>
                <p className="green">
                  Front-end &amp; Back-end with HTML &amp; CSS, Sass,
                  JavaScript, React, Redux, Node.js &amp; MySQL.
                </p>
              </div>
            </div>
            <Link className="HomepageLink" path to="/about-me">
              MORE ABOUT ME
            </Link>
          </div>


          <div className="GalleryContainer">
            <h2 className="blackTitle2">PROJECTS</h2>
            <ButtonsGallery
              cardFilterSelect={this.cardFilterSelect}
            />
            <Gallery
              cards={this.state.cards}
              filter={this.state.cardFilter}
            />
          </div>

          <Footer />

        </div>
      </>
    );
  }
}

export default Homepage;
