import { IconButton } from "@material-ui/core";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>kannamugesh135@gmail.com</span>
        </p>
        <p>
          Github Username : <span>frekerzzzz</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/mugesh-kanna-506754247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/frekerzzzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/maddy__mr_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;