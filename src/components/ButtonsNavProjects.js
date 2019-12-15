import React from "react";
import { PROJECTS } from "../non-components/Projects";
import { Link } from "react-router-dom";
import "./Buttons.scss"

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
            <Link className="ButtonAllProject" path to="/#gallery">
              BACK TO ALL
            </Link>
            <div className="Border"></div>

            {this.state.isLoaded ? (
              <Link
                className="ButtonNavProject Next Heartbeat"
                path to={`/project${this.state.nextPath}/${this.state.nextName}`}
              >
                NEXT
              </Link>
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
            <Link className="ButtonAllProject" path to="/#gallery">
              BACK TO ALL
            </Link>
            <div className="Border"></div>
            {this.state.isLoaded ? (
              <Link
                className="ButtonNavProject Previous Heartbeat"
                path to={`/project${this.state.previousPath}/${this.state.previousName}`}
              >
                PREVIOUS
              </Link>
            ) : (
              <p> is loading ...</p>
            )}
          </div>
        </>
      );
    } else if (this.props.id === "home") {
      return (
        <>
          <div className="ButtonsContainer">
            <Link className="ButtonAllProject" path to="/#gallery">
              BACK TO HOME
            </Link>
            <div className="Border"></div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="ButtonsContainer">
            <Link className="ButtonAllProject" path to="/#gallery">
              BACK TO ALL
            </Link>
            <div className="Border"></div>
            {this.state.isLoaded ? (
              <>
                <Link
                  className="ButtonNavProject Previous pulsate-fwd"
                  path to={`/project${this.state.previousPath}/${this.state.previousName}`}
                >
                  PREVIOUS
                </Link>

                <Link
                  className="ButtonNavProject Next pulsate-fwd"
                  path to={`/project${this.state.nextPath}/${this.state.nextName}`}
                >
                  NEXT
                </Link>
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
