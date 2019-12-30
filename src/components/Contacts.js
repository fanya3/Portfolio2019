import React from 'react';
import "../assets/css/Contacts.scss"
import Mail from "../assets/icons/IconMail.svg"
import LinkedIn from "../assets/icons/IconLinkedIn.svg"
import Github from "../assets/icons/IconGithub.svg"

const Contacts = (props) => {
    return ( 
        <div className = "ContactsContainer">
            <h4 className = "ContactsTitle" style={{color : props.color}}> &#60;Contact me&#47;&#62;</h4>
            <div className = "IconsContactsGroup">
                <a href="mailto:fanny.bouffier@gmail.com"><img className = "IconContacts" src={Mail} alt="mail link"/></a>
                <a href="https://www.linkedin.com/in/fannybouffier/" target="_blank" rel="noopener noreferrer"><img className = "IconContacts" src={LinkedIn} alt="linkedin link"/></a>
                <a href="https://github.com/fanya3" target="_blank" rel="noopener noreferrer"><img className = "IconContacts" src={Github} alt="github link"/></a>
            </div>
        </div>

     );
}
 
export default Contacts;