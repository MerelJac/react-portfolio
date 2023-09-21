import React from "react";
import { ContactForm } from "../components/Contact-form";
import { Coffee } from "../components/Coffee";

export const LastPage = () => {
  return (
    <>
      <div className="text-creme h-fit p-[20px] flex justify-center flex-col text-center items-center">
          <Coffee />
          <ContactForm />
      </div>
    </>
  );
};
