import React from "react";
import { HeaderText } from "../components/Header-text";
import { IconList } from "../components/Icons-Render";
import { Info } from "../components/Info";
export const ProcessPage = () => {
  return (
    <>
      <div className="text-creme h-fit p-[20px]">
        <HeaderText text={"Process"} />
        <IconList />
        <div className="p-2 items-start justify-between md:flex">
          <Info title="Dream" details="mimi thought about it" />
          <Info title="Design" details="mimi drew it in her jounral" />
          <Info title="Develop" details="mimi works hard" />
        </div>
      </div>
    </>
  );
};
