import React from "react";
import { PROJECTS } from "../../non-components/Projects";

import ButtonsNavProjects from "../../components/ButtonsNavProjects";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import Github from "../../assets/icons/IconGithub.svg";
import Web from "../../assets/icons/IconWeb.svg";

import "../../assets/css/DisplayCase.scss";

class DisplayCaseDigital extends React.Component {
  state = {
    projects: PROJECTS,
    isLoaded: false,
    project: [],
  };

  filterState = () => {
    const ProjectName = this.props.match.params.name;
    this.setState({
      project: this.state.projects.filter((item) => item.name === ProjectName),
      isLoaded: true,
    });
  };

  displayImages = () => {
    const NewProject = this.state.project[0].images.slice(1);
    return NewProject.map((item) => (
      <img className="CaseImg" src={item.image} alt={item.name}></img>
    ));
  };

  displayTexts = () => {
    return (
      <>
        <div
          className="CaseIntroSection"
          style={{
            backgroundImage: `url(${this.state.project[0].images[0].image})`,
          }}
        >
          <h2 className="blackTitle4">
            {this.state.project[0].alt}
            <span className="missionTitle">
              / {this.state.project[0].mission}
            </span>
          </h2>
          <p className="CaseDescription">
            <p className="CaseDescriptionIntro">
              {this.state.project[0].descriptionintro}
            </p>
            {this.state.project[0].description}
          </p>
        </div>

        <div className="CaseContactSection">
          {this.state.project[0].link ? (
            <div className="IconContactsGroup">
              <a
                href={`https://${this.state.project[0].link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="IconContactsWeb" src={Web} alt="web link" />
              </a>
              <a
                href={`https://${this.state.project[0].link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="IconContactsWebLink">See it online!</p>
              </a>
            </div>
          ) : null}

          <div
            className="IconContactsGroup"
            style={{
              display:
                this.state.project[0].github === "NULL" ? "none" : "flex",
            }}
          >
            <a
              href={`https://${this.state.project[0].github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="IconContactsWeb" src={Github} alt="web link" />
            </a>
            <a
              href={`https://${this.state.project[0].github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="IconContactsWebLink">Check my Github!</p>
            </a>
          </div>
        </div>
      </>
    );
  };

  componentDidMount() {
    this.filterState();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.filterState();
    }
  }

  render() {
    return (
      <div className="CaseContainer">
        {this.state.isLoaded ? (
          <Navbar
            content={<ButtonsNavProjects id={this.state.project[0].id} />}
            content2={<Contacts color={"#5bf4c1"} />}
          />
        ) : (
          <p>is loading ...</p>
        )}

        <div className="CaseDisplay">
          {this.state.isLoaded ? (
            <>
              {this.displayTexts()}
              {this.displayImages()}
            </>
          ) : (
            <p>is loading ...</p>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default DisplayCaseDigital;
