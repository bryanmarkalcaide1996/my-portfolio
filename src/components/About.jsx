import React from "react";
import "./about.css";
import bryan from "../img/me/me3.jpg";

function About() {
  return (
    <section className="about main-container">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card image">
          <img src={bryan} alt="" className="about-image" />
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
          I'm a full-stack web developer. I utilize both front-end and back-end
          technologies to create a website that is responsive and a web
          application with logical functionality.
        </p>
      </div>
    </section>
  );
}

export default About;
