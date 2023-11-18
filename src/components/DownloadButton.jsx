import React from "react";

export const DownloadButton = (props) => {
  return (
    <a href={props.href} alt={props.alt} className="pb-2" download={props.downloadName}>
      <button className="rounded-md bg-dark-green text-creme py-2 px-4 min-w-[170px] tracking-[11px]">{props.text} </button>
    </a>
  );
};
