import React from "react";

import ButtonsNavProjects from "../../components/ButtonsNavProjects";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import Tel from "../../assets/icons/IconTel.svg";
import Mail from "../../assets/icons/IconMail.svg";
import LinkedIn from "../../assets/icons/IconLinkedIn.svg";
import Github from "../../assets/icons/IconGithub.svg";

import "../../assets/css/AboutMe.scss";
import "../../assets/css/Homepage.scss";

const AboutMe = () => {
  return (
    <div className="AboutMeContainer">
      <Navbar
        content={<ButtonsNavProjects id="home" />}
        content2={<Contacts color={"#5bf4c1"} />}
      />

      <div className="AboutMeMain">
        <h2 className="blackTitle3">ABOUT ME</h2>
        <div className="AboutMeIntroSection">
          <p>
            <strong>
              As you know by now ;) I have a lively cheerful personality!
            </strong>{" "}
            What I like as a graphic designer is creating stories. I've been
            helping brands to convey their universe and values for 12 years,
            working as a designer director for the International Design Group,
            "Team Créatif". I was lucky enough to work for global branding and
            packaging projects in Paris and to experiment a more colourful
            latino design during 1-year-mission in São Paulo to develop the
            newly launched retail agency of the group in 2018.
            <br />
            <br />
            For me, design shouldn't just look good, it should do good as well.
            Therefore, since January 2019, as a Freelancer, I started helping
            people telling a different story focusing on sustainable projects
            with social &amp; environmental positive impact. This new adventure
            is boosting my energy and giving me the opportunity to meet people
            from diverse background and facing different challenges!
            <br />
            <br />
            Hard worker and always ready to take up new challenges, my love for
            innovation & science led me to join the Wild Code School Paris, in
            September 2019 for an intensive React/NodeJS developer training.{" "}
            <strong>
              I'm now looking for an internship to develop my new skills in web
              development.
            </strong>
            <br />
            <br />I love to dig inside how things work and turning complex
            problems into simple and intuitive solutions. When I'm not coding,
            you'll find me doing yoga, experimenting new zero waste cosmetic
            recipe, laughing (out loud ;&#41;) or enjoying a nice meal with
            friends.
          </p>
          <div className="ResumeBlock">
            <a
              className="ResumeLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1kEJ0_5jYcSta4P6NYPoiIAXMtSKU85zE/view?usp=sharing"
            >
              <h4> CHECK MY RESUME HERE (french)</h4>
            </a>
          </div>
        </div>
        <div className="AboutMeContactGlobalSection">
          <p className="AboutMeContactTitle">LET’S GET IN TOUCH!</p>
          <div className="AboutMeContactSection">
            <div className="AboutMeContactGroup">
              <div className="IconContactsGroup">
                <a
                  href="tel:0672713295"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="IconContacts" src={Tel} alt="tel link" />
                </a>
                <a
                  href="tel:0672713295"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>+33 6 72 71 32 95</p>
                </a>
              </div>
              <div className="IconContactsGroup">
                <a
                  href="mailto:fanny.bouffier@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="IconContacts" src={Mail} alt="mail link" />
                </a>
                <a
                  href="mailto:fanny.bouffier@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>fannybouffier@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="AboutMeContactGroup">
              <div className="IconContactsGroup">
                <a
                  href="https://www.linkedin.com/in/fannybouffier/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="IconContacts" src={LinkedIn} alt="linkedin" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fannybouffier/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>www.linkedin.com/in/fannybouffier/</p>
                </a>
              </div>
              <div className="IconContactsGroup">
                <a
                  href="https://github.com/fanya3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="IconContacts"
                    src={Github}
                    alt="github link"
                  />
                </a>
                <a
                  href="https://github.com/fanya3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>github.com/fanya3</p>
                </a>
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
