import React, { useState } from "react";

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
    console.log(formData)
  };

  return (
    <>
    <form>
      <input type="email" required="true" placeholder="Email"></input>
      <input type="text" required="true" placeholder="Subject"></input>
      <input type="text" required="true" placeholder="Subject"></input>
      <button type="submit" onClick={handleSubmit}>Talk soon!</button>
    </form>
    </>
  );
};
