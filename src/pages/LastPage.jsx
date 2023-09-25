import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Coffee } from "../components/Coffee";
import ScrollAnimation from "react-animate-on-scroll";

export const LastPage = () => {
  return (
    <>
    <ScrollAnimation animateIn="fadeIn">
      <div className="text-creme h-fit p-[20px] flex justify-center flex-col text-center items-center">
          <Coffee />
          <ContactForm />
      </div>
      </ScrollAnimation>
    </>
  );
};
