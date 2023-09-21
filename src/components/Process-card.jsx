import React from "react";

export const ProcessCard = (props) => {
  return (
    <>
    <section class="max-w-sm rounded overflow-hidden shadow-lg text-center mx-4">
            <img class="w-full" src={props.src} alt={props.alt}/>
            <div class="px-6 py-4">
                <div class="font-bold text-md mb-2">{props.title}
                </div>
                <p class="text-gray-700 text-base">{props.text}
                </p>
            </div>
        </section>    
    </>
  );
};
