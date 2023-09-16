import React from "react";

export const Icon = (props) => {
    return (
        <>
        <img className="max-w-[80px]" src={props.src} alt={props.alt}/>
        </>
    )
}