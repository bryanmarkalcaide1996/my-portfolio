import React from "react";
import "./contact.css";
import { bma } from "../data";
import Form from "./Form";
import gear from "../img/icons/gear.png";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-left">
        <h3 className="contact-title">Let's discuss your project ...</h3>
        <div className="contact-container">
          <div className="contact-info">
            {bma.map(({ id, name, icon, href }) => {
              return (
                <div className="info-item" key={id}>
                  {name === "Email" ? (
                    <div className="contact-icon">
                      <a
                        href={`mailto:${href}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={icon} alt="" />
                      </a>
                      {name}
                    </div>
                  ) : (
                    <div className="contact-icon">
                      <a href={href} target="_blank" rel="noreferrer">
                        <img src={icon} alt="" />
                      </a>
                      {name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="gear-container">
            <img src={gear} alt="" className="gear" />
          </div>
        </div>
      </div>

      <div className="contact-right">
        <p className="right-description">
          <b>What's your story?</b> Get in touch. Always available to work if
          the right project comes along.
        </p>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
