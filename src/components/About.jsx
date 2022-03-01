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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic
          fuga veritatis ipsa natus eveniet quas exercitationem debitis magnam
          soluta cum amet, quae magni repudiandae, beatae explicabo sunt
          consectetur eius. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Corrupti quam tempore eaque aut autem animi facere voluptas.
          Facere enim neque accusamus fuga rem vel, earum consequatur quo
          recusandae dignissimos voluptates?
        </p>
      </div>
    </section>
  );
}

export default About;
