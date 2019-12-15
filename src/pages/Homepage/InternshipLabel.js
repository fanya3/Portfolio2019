import React from 'react';
import "./InternshipLabel.scss"

class InternshipLabel extends React.Component {

  handleScroll = () => {
    const body = document.body;
    const news = "news";
    const WhatIDo = document.getElementsByClassName("HomepageWhatIDo");
    let currentScroll = window.pageYOffset;
    let WhatIDoPosition = WhatIDo[0].offsetTop - 380;

    if (currentScroll >= WhatIDoPosition && !body.classList.contains(news)) {
      body.classList.add(news);
    } else if (currentScroll < WhatIDoPosition && body.classList.contains(news)) {
      body.classList.remove(news);
    } else return;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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