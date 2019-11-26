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
      isLoaded: true,
    });
  };

  // filterState = async () => {
  //   const ProjectName = this.props.match.params.name;
  //   await this.setState({
  //     project: this.state.projects.filter(item => item.name === ProjectName),
  //     isLoaded: true,
  //   });
  //   this.setState({
  //     id:this.state.project[0].id
  //   }) 
  // };


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
