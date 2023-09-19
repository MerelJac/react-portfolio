import React from "react";
import { DetailText } from "../components/Detail-text";
import { HeaderText } from "../components/Header-text";
import { ContactForm } from "../components/Contact-form";
import { ProcessCard } from "../components/Process-card";

export const LastPage = () => {
  return (
    <>
      <div className="text-creme h-fit p-[20px]">
        <section className="flex flex-row items-center justify-between">
          <HeaderText text={"Let's connect"} />
        </section>
        <ContactForm />
      </div>
    </>
  );
};
