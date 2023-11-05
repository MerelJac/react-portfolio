import React from "react";
import { Button } from "./Button";

export const PorfolioSection = (props) => {

  return (
    <section className="flex flex-col gap-2 sm:flex-row items-center w-[100vw] px-2">
      <div className="p-2 flex flex-col w-full">
        <h2 className="font-bold text-md">{props.title}</h2>
        <p className="pb-6">{props.text}</p>
        <p className="pb-2"><span className="font-bold text-sm">Featured Project: </span>{props.projectTitle}</p>
        <p className="pb-4"><span className="font-bold text-sm">Contribution: </span>{props.projectContribution}</p>
        
        <Button href={props.hrefImg} alt={props.imgAlt} text={props.buttonText}/>

      </div>
<div >
    <a href={props.hrefImg}>
    <img className="" src={props.img} alt={props.imgAlt}></img>
    </a>
</div>
    </section>
  );
};
