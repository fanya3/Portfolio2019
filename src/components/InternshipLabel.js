import React from 'react';
import "../assets/css/InternshipLabel.scss"

class InternshipLabel extends React.Component {

  handleScrollNews = () => {
    // const body = document.body;
    // const news = "news";
    const WhatIDo = document.getElementsByClassName("HomepageWhatIDo");
    const pastille = document.getElementsByClassName("Label");
    let currentScroll = window.pageYOffset;
    let WhatIDoPosition = (WhatIDo[0].offsetTop)-200;

    if (currentScroll >= WhatIDoPosition && !pastille[0].classList.contains("news")) {
      pastille[0].classList.add("news");
    } else if (currentScroll < WhatIDoPosition && pastille[0].classList.contains("news")) {
      pastille[0].classList.remove("news");
    } else return;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollNews);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollNews);
  }

  render() {
    
    return (
      
      <div className="Label">
        <h4>NEWS!</h4>
        <p>
          I'm looking for an internship as a web developper
          <span className="date"> starting mid-february <br/>2020</span>
        </p>
      </div>
    );
  }
}
 
export default InternshipLabel;