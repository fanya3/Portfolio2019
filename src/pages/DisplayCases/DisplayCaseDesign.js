import React from "react";
import { PROJECTS } from "../../non-components/Projects";

import ButtonsNavProjects from "../../components/ButtonsNavProjects";
import Contacts from "../../components/Contacts"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import "./DisplayCase.scss";
import "../AboutMe/AboutMe.scss";

class DisplayCaseDesign extends React.Component {
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
        <h2 className="blackTitle4">{this.state.project[0].alt}<span className="missionTitle">{this.state.project[0].mission}</span></h2>
        <div className="CaseIntro">
          <p>{this.state.project[0].description}</p>
        </div>
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
        {this.state.isLoaded ? 
         (<Navbar
            content={
                <ButtonsNavProjects
                  id = {this.state.project[0].id}
                />
            }
            content2={
              <Contacts/>
          }
          />
         
        ) : (
          <p>is loading ...</p>
        )}

        <div className="CaseDisplay">
          {this.state.isLoaded ? (
            <>
               {console.log("projectid dans case",this.state.project[0].id) }
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

export default DisplayCaseDesign;
