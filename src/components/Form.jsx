import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./form.css";

function Form() {
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form-component">
      <input
        className="formInput"
        type="text"
        name="user_name"
        placeholder="Name"
      />
      <input
        className="formInput"
        type="email"
        name="user_email"
        placeholder="Email"
      />
      <input
        className="formInput"
        type="text"
        name="user_subject"
        placeholder="Subject"
      />
      <textarea name="message" rows="10" />
      <input type="submit" name="submit" />
    </form>
  );
}

export default Form;
