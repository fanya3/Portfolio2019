import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../non-components/Projects";

import ButtonsGallery from "./ButtonsGallery"
import Footer from "../../components/Footer";
import Gallery from "./Gallery";
import InternshipLabel from "../../components/InternshipLabel";
import MainNavbar from "../../components/MainNavbar";

import Hello from "../../assets/icons/Hello.svg";
import And from "../../assets/icons/And.svg";
import "../../assets/css/Homepage.scss";
import "../../assets/css/Gallery.scss"


class Homepage extends Component {

  state = {
    cards: PROJECTS,
    cardFilter: null
  };


  cardFilterSelect = (filterName) => {
    this.setState({ cardFilter: filterName });
  };

  componentDidMount () {
    const myId = window.location.hash.slice(1)
    const elem = document.getElementById(myId)
    if (elem) {
      elem.scrollIntoView()
    }
  }

  render() {
    return (
      <>
        <div className="HomepageContainer">
          <MainNavbar/>
          
          <div className="HomepageIntro">
            <div className="HomepageHelloContainer">
              <img className="HomepageHelloLogo" src={Hello} alt="hello logo" />
              <p className="HomepageHelloText">
                I’m a lively cheerful design director <br />
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
            <InternshipLabel/>

            <div className="WhatIDoBlock">
              <h2 className="blackTitle1">WHAT I DO</h2>

              <div className="WhatIDoBlockText">
                <h3 className="WhatIDoTitle  green">I DESIGN</h3>

                <p  className="green">
                  Graphic Design, Corporate Identity, <br/> Branding and Packaging Design, Web Design, with Global Strategic Thinking
                </p>
              </div>

              <div className="Between">
                <img className="And" src={And} alt=" zz" />
              </div>

              <div className="WhatIDoBlockText">
                <h3 className="WhatIDoTitle">I DEVELOP</h3>
                <p>
                  FRONT-END &amp; BACK-END <br/> with HTML &amp; CSS, Sass, Bootstrap, 
                  JavaScript, React, Redux, Node.js &amp; Database with MySQL.
                </p>
              </div>
            </div>
            <Link className="HomepageLink" to="/about-me">
              MORE ABOUT ME
            </Link>
          </div>


          <div className="GalleryContainer">
            <h2 className="blackTitle2"  id="GalleryId">PROJECTS</h2>
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
