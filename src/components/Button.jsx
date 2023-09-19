import React from "react";

export const Button = (props) => {
  return (
    <a href={props.href} alt={props.alt} className="pb-2">
      <button className="rounded-md bg-creme text-dark-green py-2 px-4 min-w-[170px] tracking-[11px]">{props.text} </button>
    </a>
  );
};
