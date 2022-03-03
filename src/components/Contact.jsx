import React from "react";
import "./contact.css";
import { bma } from "../data";
import Form from "./Form";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h3 className="contact-title">Let's discuss your project ...</h3>
          <div className="contact-info">
            {bma.map(({ id, name, icon }) => {
              return (
                <div className="info-item" key={id}>
                  <img src={icon} alt="" className="contact-icon" />
                  {name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="contact-right">
          <p className="right-description">
            <b>What's your story?</b> Get in touch. Always available to work if
            the right project comes along.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
