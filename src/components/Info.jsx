import React from "react";

export const Info = (props) => {
    return (
        <article className="flex flex-col justify-start">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
        </article>
    ) 
}
