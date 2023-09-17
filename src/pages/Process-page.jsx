import React from "react";
import { HeaderText } from "../components/Header-text";
import { IconList } from "../components/Icons-Render";
import { Info } from "../components/Info";
export const ProcessPage = () => {
  
  return (
    <>
      <div className="text-creme h-fit p-[20px] relative overflow-hidden h-[300px]">
        <HeaderText text={"Process"} />
        <div className="relative flex sm:flex-col flex-row justify-between pt-[20px]">
          <IconList />
          <div className="relative flex items-center justify-center flex-row z-10 w-full top-[20px] flex-wrap">
            <Info title="Design" />
            <Info title="Develop" />
            <Info title="Deploy" />
          </div>
        </div>
      </div>
    </>
  );
};
