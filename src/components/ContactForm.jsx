import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState('Send')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('merelprofessional', 'template_5uw6hr2', form.current, 'BSHcT2TeK_7bUz5sX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    setSent('Sent')


  };

  const inputClass = {
    borderRadius: '10px',
    padding: '10px',
    background: '#F7E3D4',
    color: "#234539"
  }

  return (
    <form className="flex flex-col w-[70%]" ref={form} onSubmit={sendEmail}>
      <label className="flex justify-start">Name</label>
      <input style={inputClass} type="text" name="user_name" />
      <label className="flex justify-start">Email</label>
      <input style={inputClass} type="email" name="user_email" />
      <label className="flex justify-start">Message</label>
      <textarea style={inputClass} name="message" />
      <input className="flex justify-end color-dark-green" type="submit" value={sent} />
    </form>
  );
};