import React from "react";
import "../_GlobalStyle.scss";
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
    const { projects} =this.state
    const { id } = this.props
    if (id === 0) {
       this.setState({
        nextPath : projects[id + 1].path,
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
    const { id } = this.props
    if(id!== prevProps.id){
      this.getLinks();
    }
  }


  componentDidMount() {
    this.getLinks();
  }


  render() {
    console.log("id dans bouton",this.props.id)
    if (this.props.id === 0) {
      return (
        <div> {this.state.isLoaded ?
        (<div>
          <h4>next</h4>
          <Link path to = {`/project${this.state.nextPath}/${this.state.nextName}`}>Next Project</Link>
        </div>
          ) : (
        <p> is loading ...</p>
        )}
      </div>
      )

    } else if (this.props.id === this.state.projects.length - 1) {
    return (
      <div> {this.state.isLoaded ?
      (<div>
        <h4>previous</h4>
        <Link path to = {`/project${this.state.previousPath}/${this.state.previousName}`}>Previous Project</Link>
        </div>
        ) : (
      <p> is loading ...</p>
      )}
    </div>
    )

  } else {
    return (
      <div> {this.state.isLoaded ?
      (<div>
        <h4>liens complets</h4>
        <Link path to = {`/project${this.state.previousPath}/${this.state.previousName}`}>Previous Project</Link>

        <Link path to = {`/project${this.state.nextPath}/${this.state.nextName}`}>Next Project</Link>
        </div>
        ) : (
      <p> is loading ...</p>
      )}
    </div>
    )
  }
}
}

export default ButtonsNavProjects;




// import React from "react";
// import "../_GlobalStyle.scss";
// import { Link } from "react-router-dom";

// const ButtonsNavProjects = props => {
//   if (props.id === 0) {
//     return (
//       <div>
//         <h4>next</h4>
//         <Link path to={`/project${props.nextPath}/${props.nextName}`}>
//           Next Project
//         </Link>
//       </div>
//     );
//   // } else if (props.id === props.max) {
//   //   return (
//   //     <div>
//   //       <h4>previous</h4>
//   //       {/* <Link path={`/project${props.previousPath}/${props.previousName}`}>
//   //         Previous Project
//   //       </Link> */}
//   //     </div>
//   //   );
//   } else {
//     return (
//       <div>
//         <h4>liens complets</h4>
//         <Link path to={`/project${props.nextPath}/${props.nextName}`}>
//           Next Project
//         </Link>
//         {/* <Link path to={`/project${props.previousPath}/${props.previousName}`}>
//           Previous Project
//         </Link> */}
//       </div>
//     );
//   }
// };

// export default ButtonsNavProjects;
