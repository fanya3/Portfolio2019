import React from 'react';


const Navbar = (props) => {
    return (
      <div className="NavbarContainer">
        Navbar
      {props.content}
      </div>
    );
  }

  export default Navbar