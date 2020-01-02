import React from "react";
import { PROJECTS } from "../non-components/Projects";
import { Link } from "react-router-dom";
import "../assets/css/Buttons.scss"

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
    } else if (id === "home") {
      this.setState({
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

    if (this.props.id === 0) {
      return (
        <>
          <div className="ButtonsContainer">
            <Link className="ButtonAllProject" path to="/#GalleryId">
              BACK TO ALL
            </Link>
            <div className="BorderNav"></div>
            
            {this.state.isLoaded ? (
              <div className="ButtonsNavGroup"><Link
                className="ButtonNavProject Next Heartbeat"
                path to={`/${this.state.nextPath}project/${this.state.nextName}`}
              >
                NEXT
              </Link> </div>
            ) : (
              <p> is loading ...</p>
            )}
          </div>
        </>
      );
    } else if (this.props.id === this.state.projects.length - 1) {
      return (
        <>
          <div className="ButtonsContainer">
            <Link className="ButtonAllProject" path to="/#GalleryId">
              BACK TO ALL
            </Link>
            <div className="BorderNav"></div>
            {this.state.isLoaded ? (
               <div className="ButtonsNavGroup"><Link
                className="ButtonNavProject Previous Heartbeat"
                path to={`/${this.state.previousPath}project/${this.state.previousName}`}
              >
                PREVIOUS
              </Link> </div>
            ) : (
              <p> is loading ...</p>
            )}
          </div>
        </>
      );
    } else if (this.props.id === "home") {
      return (
        <>
          <div className="ButtonsContainerAboutMe">
            <Link className="ButtonAllProject" path to="/">
              BACK TO HOME
            </Link>
            <div className="BorderAbout"></div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="ButtonsContainer">
            <Link className="ButtonAllProject" path to="/#GalleryId">
              BACK TO ALL
            </Link>
            <div className="BorderNav"></div>
            {this.state.isLoaded ? (
              <>
                <div className="ButtonsNavGroup"><Link
                  className="ButtonNavProject Previous pulsate-fwd"
                  path to={`/${this.state.previousPath}project/${this.state.previousName}`}
                >
                  PREVIOUS
                </Link>

                <Link
                  className="ButtonNavProject Next pulsate-fwd"
                  path to={`/${this.state.nextPath}project/${this.state.nextName}`}
                >
                  NEXT
                </Link></div>
              </>
            ) : (
              <p> is loading ...</p>
            )}
          </div>
        </>
      );
    }
  }
}

export default ButtonsNavProjects;
