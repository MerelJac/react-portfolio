import React from "react";
import { AboutImg } from "../components/About-img";
import { HeaderText } from "../components/Header-text";
import { AboutInfo } from "../components/About-info";

export const AboutPage = () => {
    return (
      <>
        <section className="text-creme">
          <HeaderText text="About Me" />
          <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-5">
            <div className="w-1/2 w-[600px] flex content-center">
            <AboutInfo />
            </div>
            <div className="w-1/2">
            <AboutImg />
            </div>
          </div>
        </section>
      </>
    );
  };
  