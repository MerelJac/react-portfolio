import React from "react";

export const Button = (props) => {
  return (
    <a href={props.href} alt={props.alt}>
      <button className="rounded-md bg-creme text-dark-green py-2 px-4 w-[168px]">{props.text} </button>
    </a>
  );
};
