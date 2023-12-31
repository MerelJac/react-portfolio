import React from "react";

export const DownloadButton = (props) => {
  return (
    <a href={props.href} alt={props.alt} className="pb-2 text-center" download={props.downloadName}>
      <button className="text-right rounded-md bg-creme text-dark-green py-2 px-4 min-w-[170px] tracking-[11px] ">{props.text} </button>
    </a>
  );
};
