import React from "react";

export const Image = (props) => {
  return (
    <>
    <section class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-[400px]" src={props.src} alt={props.alt}/>
            <div class="px-6 py-4">
                <p class="text-gray-700 text-base">{props.text}
                </p>
            </div>
        </section>    
    </>
  );
};