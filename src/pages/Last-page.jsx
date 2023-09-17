import React from "react";
import { DetailText } from "../components/Detail-text";
import { HeaderText } from "../components/Header-text";
import { Button } from "../components/Button";
export const LastPage = () => {
  return (
    <>
      <div className="text-creme h-fit p-[20px]">
        <section className="flex flex-col md:flex-row items-center justify-between">
        <HeaderText text={"Let's connect"}/>
        <p>About code or and more!</p>
        <Button text={"Email Me!"} href={"mailto:merel.burleigh@gmail.com"} alt={"email"}/>
        </section>
      </div>
    </>
  );
};
