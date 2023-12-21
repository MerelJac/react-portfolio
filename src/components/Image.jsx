import React from "react";

export const Image = (props) => {
  return (
    <>
    <section class="max-w-sm rounded overflow-hidden shadow-lg mb-2 rounded-xl">
            <img class="w-[50rem]" src={props.src} alt={props.alt}/>
            <div class="px-6 py-4">
                <p class="text-gray-700 text-base">{props.text}
                </p>
            </div>
        </section>    
    </>
  );
};