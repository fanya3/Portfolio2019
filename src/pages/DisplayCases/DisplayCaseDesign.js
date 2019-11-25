import React from "react";
import "./DisplayCase.scss";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ButtonsNavProjects from "../../components/ButtonsNavProjects";
import { PROJECTS } from "../../non-components/Projects";

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
      isLoaded: true
    });
  };

  displayImages = () => {
    return this.state.project[0].images.map(item => (
      <img className="illustr" src={item.image} alt={item.name}></img>
    ));
  };

  displayTexts = () => {
    return (
      <>
        <h3>{this.state.project[0].name}</h3>
        <p>{this.state.project[0].description}</p>
      </>
    );
  };

  componentDidMount() {
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
                // nextPath= {this.state.projects[this.state.project[0].id + 1].path} 
                // nextName = {this.state.projects[this.state.project[0].id + 1].name} 
                // previousPath= {this.state.projects[this.state.project[0].id - 1].path} 
                // previousName = {this.state.projects[this.state.project[0].id - 1].name} 
                // max={this.state.projects.length - 1}
              />
            }
          />
         
        ) : (
          <p>is loading ...</p>
        )}

        <h2>Design</h2>

        <div className="CaseDisplay">
          {this.state.isLoaded ? (
            <div>
               {console.log("projectid dans case",this.state.project[0].id) }
              {this.displayTexts()}
              {this.displayImages()}
            </div>
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
