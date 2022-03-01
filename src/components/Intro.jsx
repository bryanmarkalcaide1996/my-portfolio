import React from "react";
import "./intro.css";
import avatar from "../img/me/me2.png";

function Intro() {
  return (
    <section className="intro ">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-greet">Hello, I'm </h2>
          <h1 className="intro-name">Bryan Mark Alcaide</h1>
          <div className="intro-my-titles">
            <div className="title-wrapper">
              <h3 className="title-item">Full-Stack Developer</h3>
              <h3 className="title-item">JavaScript Developer</h3>
              <h3 className="title-item">React Developer</h3>
              <h3 className="title-item">Vue Developer</h3>
              <h3 className="title-item">Node Developer</h3>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            assumenda est ducimus, temporibus, maxime sed tempore eum similique
            non dolore nulla? Velit expedita amet facere nostrum neque odio!
            Iusto, dignissimos?
          </p>
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
