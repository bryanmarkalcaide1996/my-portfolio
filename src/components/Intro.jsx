import React from "react";
import "./intro.css";
import avatar from "../img/me/me2.png";
import { titles } from "../data";
import Titles from "./Titles";

function Intro() {
  return (
    <section className="intro ">
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
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={avatar} alt="bryan mark alcaide" className="intro-img" />
      </div>
    </section>
  );
}
export default Intro;
