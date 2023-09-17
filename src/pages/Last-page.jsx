import React from "react";
import { ContactForm } from "../components/Contact-form";
import { HeaderText } from "../components/Header-text";
export const LastPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 text-creme h-fit p-[20px]">
        <section>
        <HeaderText text={"About Me"}/>
        </section>
        <section>
          <ContactForm />
        </section>
      </div>
    </>
  );
};
