import React from "react";

export const Icon = (props) => {
  return (
    <a href={props.link} alt={props.alt}>
      <img className="max-w-[40px] m-2" src={props.src} alt={props.alt} />
    </a>
  );
};
