import React from "react";
import "../_GlobalStyle.scss";
import "./Navbar.scss"
import { PROJECTS } from "../non-components/Projects";
import { Link } from "react-router-dom";

class ButtonsNavProjects extends React.Component {
  state = {
    projects: PROJECTS,
    nextPath: "",
    nextName: "",
    previousPath: "",
    previousName: "",
    isLoaded: false
  };

  getLinks = () => {
    const { projects } = this.state;
    const { id } = this.props;
    if (id === 0) {
      this.setState({
        nextPath: projects[id + 1].path,
        nextName: projects[id + 1].name,
        isLoaded: true
      });
    } else if (id === projects.length - 1) {
      this.setState({
        previousPath: projects[id - 1].path,
        previousName: projects[id - 1].name,
        isLoaded: true
      });
    } else {
      this.setState({
        nextPath: projects[id + 1].path,
        nextName: projects[id + 1].name,
        previousPath: projects[id - 1].path,
        previousName: projects[id - 1].name,
        isLoaded: true
      });
    }
  };

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (id !== prevProps.id) {
      this.getLinks();
    }
  }

  componentDidMount() {
    this.getLinks();
  }

  render() {
    // console.log("id dans bouton",this.props.id)
    if (this.props.id === 0) {
      return (
        <>
          <div >
              <Link className = "ButtonBack" path to="/#gallery"><p>BACK TO ALL</p></Link>
          </div>
          <div className = "Border" ></div>
          {this.state.isLoaded ? (
            <div >
              <Link className = "ButtonNavProject Next Heartbeat" path to={`/project${this.state.nextPath}/${this.state.nextName}`}><p>NEXT</p></Link>
            </div>
          ) : (
            <p> is loading ...</p>
          )}
        </>
      );
    } else if (this.props.id === this.state.projects.length - 1) {
      return (
        <>
          <div >
              <Link className = "ButtonBack" path to="/#gallery"><p>BACK TO ALL</p></Link>
          </div>
          <div className = "Border" ></div>
          {this.state.isLoaded ? (
            <div>
              <Link className = "ButtonNavProject Previous Heartbeat" path to={`/project${this.state.previousPath}/${this.state.previousName}`}><p>PREVIOUS</p></Link>
            </div>
          ) : (
            <p> is loading ...</p>
          )}
        </>
      );
    } else {
      return (
        <>
          <div >
              <Link className = "ButtonBack" path to="/#gallery"><p>BACK TO ALL</p></Link>
          </div>
          <div className = "Border" ></div>
          {this.state.isLoaded ? (
            <div>
              <Link className = "ButtonNavProject Previous Heartbeat" path to={`/project${this.state.previousPath}/${this.state.previousName}`}><p>PREVIOUS</p></Link>
              <Link className = "ButtonNavProject Next Heartbeat" path to={`/project${this.state.nextPath}/${this.state.nextName}`}><p>NEXT</p></Link>
            </div>
          ) : (
            <p> is loading ...</p>
          )}
        </>
      );
    }
  }
}

export default ButtonsNavProjects;
