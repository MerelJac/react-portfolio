import React from "react";
import { HeaderText } from "../components/Header-text";
import { ContactForm } from "../components/Contact-form";
import { Coffee } from "../components/Coffee";

export const LastPage = () => {
  return (
    <>
      <div className="text-creme h-fit p-[20px] flex justify-center">
        <section className="flex flex-col sm:flex-row items-center justify-between">
<Coffee/>
        <ContactForm />
        </section>

      </div>
    </>
  );
};
