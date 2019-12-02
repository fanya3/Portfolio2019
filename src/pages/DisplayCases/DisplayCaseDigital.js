import React, { Component } from "react";
import "./DisplayCase.scss";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { PROJECTS } from "../../non-components/Projects";
import ButtonsNavProjects from "../../components/ButtonsNavProjects";

class DisplayCaseDigital extends Component {
  state = {
    projects: PROJECTS,
    isLoaded: false,
    project: []
  };

  filterState = () => {
    const ProjectName = this.props.match.params.name;
    this.setState({
      project: this.state.projects.filter(item => item.name === ProjectName),
      isLoaded: true,
    });
  };


  displayImages = () => {
    return this.state.project[0].images.map(item => (
      <img className="CaseImg" src={item.image} alt={item.name}></img>
    ));
  };

  displayTexts = () => {
    return (
      <>
        <h2>{this.state.project[0].name}</h2>
        <p>{this.state.project[0].description}</p>
      </>
    );
  };

  displayLinks = () => {
    return (
      <>
        <h4>{this.state.project[0].link}</h4>
        <h4>{this.state.project[0].github}</h4>
      </>
    );
  };
 
  componentDidUpdate(prevProps) {
    if(this.props.match.params.name !== prevProps.match.params.name){
      this.filterState();     
    }
  }
  componentDidMount(){
    this.filterState(); 
  }

  render() {
    return (
      <div className="CaseContainer">
        {this.state.isLoaded ? (
          <Navbar
            content={
              <ButtonsNavProjects
                id = {this.state.project[0].id}
              />
            }
          />
         
        ) : (
          <p>is loading ...</p>
        )}

        <div className="CaseDisplay">
          {this.state.isLoaded ? (
            <>
              {this.displayTexts()}
              {this.displayImages()}
              {this.displayLinks()}
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
