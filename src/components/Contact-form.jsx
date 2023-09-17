import React, { useState } from "react";
import { HeaderText } from "./Header-text";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend for email processing.
    console.log(formData);
  };

  return (
    <>
      <HeaderText text={"Get In Touch!"} />{" "}
      <form className="flex flex-col p-2">
        <input type="email" required="true" placeholder="Email">{}</input>
        <input type="text" required="true" placeholder="Subject">{}</input>
        <input type="text" required="true" placeholder="Message">{}</input>
        <button type="submit" onClick={handleSubmit}>
          Talk soon!
        </button>
      </form>
    </>
  );
};
