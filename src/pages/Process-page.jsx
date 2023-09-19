import React from "react";
import { HeaderText } from "../components/Header-text";
import { IconList } from "../components/Icons-Render";
import { Info } from "../components/Info";
import { ProcessCard } from "../components/Process-card";

export const ProcessPage = () => {
  
  return (
    <>

      <div className="text-creme h-fit p-[20px] relative overflow-hidden h-[300px]">
        <HeaderText text={"Process"} />
        <ProcessCard/>
      </div>
    </>
  );
};
