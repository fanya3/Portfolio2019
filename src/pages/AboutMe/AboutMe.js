import React from "react";

import ButtonsNavProjects from "../../components/ButtonsNavProjects";
import Contacts from "../../components/Contacts"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import Tel from "../../assets/icons/IconTel.svg"
import Mail from "../../assets/icons/IconMail.svg"
import LinkedIn from "../../assets/icons/IconLinkedIn.svg"
import Github from "../../assets/icons/IconGithub.svg"

import "../../assets/css/AboutMe.scss";
import "../../assets/css/Homepage.scss";

const AboutMe = () => {
  return (
    <div className="AboutMeContainer">
      <Navbar
        content={<ButtonsNavProjects id="home"/>}
        content2={<Contacts 
          color={'#5bf4c1'}/>}
      />

      <div className="AboutMeMain">
       <h2 className="blackTitle3">ABOUT ME</h2>
          <div className="AboutMeIntroSection">
            <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor purus in lobortis scelerisque. Mauris scelerisque massa in pellentesque ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae dictum quam. Mauris est nunc, porta ac ornare ac, iaculis eu lorem. Fusce ut tellus ligula. Phasellus eu diam cursus enim pellentesque facilisis. Praesent a ipsum cursus, bibendum ipsum eget, malesuada ipsum. Vivamus ut vulputate turpis, vel elementum nibh. Curabitur tincidunt massa urna, nec dictum velit malesuada a. Sed a finibus orci, sed accumsan nulla. Suspendisse tristique neque diam, sit amet lacinia elit lobortis sit amet. Nam vitae dolor eu tellus tincidunt vulputate eget finibus ex. Fusce vel rutrum purus. Sed erat nunc, commodo ac odio commodo, ullamcorper viverra elit. Quisque pulvinar sed ante ut posuere.
              <br/><br/>
              Etiam sed cursus quam, a convallis leo. Aliquam imperdiet ante in venenatis efficitur. Sed ut est eget tellus venenatis consectetur. Pellentesque quis mi iaculis, rutrum nisi eu, ultricies erat. Proin lacus lorem, aliquam quis feugiat quis, faucibus eu enim. Proin pellentesque aliquam magna, id finibus ligula semper vel. Morbi aliquam nibh sit amet semper ultricies. Maecenas pulvinar, libero accumsan iaculis tincidunt, magna nunc mollis sem, quis volutpat quam magna quis orci. Aliquam non orci sagittis, faucibus magna eu, posuere elit. 
            </p>
            <div className="ResumeBlock"><a  className="ResumeLink" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1RxtCDI-JMTEwavL05ysIAMYojMRORtyQ/view?usp=sharing"><h4 > CHECK MY RESUME HERE (french)</h4></a></div>
          </div>
          <div className="AboutMeContactGlobalSection">

            <p className="AboutMeContactTitle">LET’S GET IN TOUCH!</p>
            <div className="AboutMeContactSection">
                <div className="AboutMeContactGroup">
                  <div className = "IconContactsGroup">
                    <a href='#' target="_blank" rel="noopener noreferrer"><img className = "IconContacts" src={Tel} alt="tel link"/></a>
                    <a href='#' target="_blank" rel="noopener noreferrer"><p>+33 6 72 71 32 95</p></a>
                  </div>
                  <div className = "IconContactsGroup">
                    <a href="mailto:fanny.bouffier@gmail.com" target="_blank" rel="noopener noreferrer"><img className = "IconContacts" src={Mail} alt="mail link"/></a>
                    <a href="mailto:fanny.bouffier@gmail.com" target="_blank" rel="noopener noreferrer"><p>fannybouffier@gmail.com</p></a>
                  </div>
                </div>
                <div className="AboutMeContactGroup">
                  <div className = "IconContactsGroup">
                    <a href="https://www.linkedin.com/in/fannybouffier/" target="_blank" rel="noopener noreferrer"><img className = "IconContacts" src={LinkedIn} alt="linkedin"/></a>
                    <a href="https://www.linkedin.com/in/fannybouffier/" target="_blank" rel="noopener noreferrer"><p>www.linkedin.com/in/fannybouffier/</p></a>
                  </div>
                  <div className = "IconContactsGroup">
                    <a href="https://github.com/fanya3" target="_blank" rel="noopener noreferrer"><img className = "IconContacts" src={Github} alt="github link"/></a>
                    <a href="https://github.com/fanya3" target="_blank" rel="noopener noreferrer"><p>github.com/fanya3</p></a>
                  </div>
                </div>
              </div>
              
        </div>
       

      </div>

    

      <Footer />
    </div>
  );
};

export default AboutMe;
