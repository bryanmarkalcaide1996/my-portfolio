import React from "react";
import "./intro.css";
import avatar from "../img/me/me2.png";
import { titles } from "../data";
import Titles from "./Titles";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-greet">Hello, I'm </h2>
          <p className="intro-name">Bryan Mark Alcaide</p>
          <h1 className="intro-heading">Full-Stack Developer</h1>
          <div className="intro-my-titles">
            <div className="title-wrapper">
              {titles.map((title) => {
                return <Titles title={title} />;
              })}
            </div>
          </div>
          <p className="about-description">
            I'm a full-stack web developer. I utilize both front-end and
            back-end technologies to create a website that is responsive and a
            web application with logical functionality.
          </p>
        </div>
      </div>

      <div className="intro-right">
        <img src={avatar} alt="bryan mark alcaide" className="intro-img" />
      </div>
    </section>
  );
}
export default Intro;
