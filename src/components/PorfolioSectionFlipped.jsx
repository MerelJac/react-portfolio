import React from "react";
import { Button } from "./Button";

export const PorfolioSectionFlipped = (props) => {
  return (
    <section className="flex flex-col gap-2 sm:flex-row items-center w-[100vw] px-2 pt-4">
            <div className="order-2 sm:order-1">
        <a href={props.hrefImg}>
          <img className="" src={props.img} alt={props.imgAlt}></img>
        </a>
      </div>
      <div className="p-2 flex flex-col w-full text-end order-1 sm:order-2">
        <h2 className="font-bold text-md">{props.title}</h2>
        <p className="pb-6">{props.text}</p>
        <p className="font-bold text-sm">Featured Project</p>
        <p className="pb-4">{props.projectTitle}</p>
        <p className="font-bold text-sm">Contribution</p>
        <p className="pb-4">{props.projectContribution}</p>

        <Button
          href={props.hrefImg}
          alt={props.imgAlt}
          text={props.buttonText}
        />
      </div>
    </section>
  );
};
