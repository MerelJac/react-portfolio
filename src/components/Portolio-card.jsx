import React, { useState } from "react";

export const CardPorfolio = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const showDetails = () => {
    setIsHovered(true);
  };

  const hideDetails = () => {
    setIsHovered(false);
  };

  const sectionStyle = {
    backgroundImage: `url(${props.url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    transition: "opacity 0.3s",
    opacity: isHovered ? 0.4 : 1,
  };

  return (
    <>
      <a href={props.link}>
        <div style={sectionStyle}>
          <section
            className="gap-y-2 h-[300px] br-5"
            onMouseOver={showDetails}
            onMouseOut={hideDetails}
          >
            <article
              className={
                isHovered
                  ? "p-2 h-full flex flex-col justify-between"
                  : "invisible"
              }
            >
              <h2>Title: {props.title}</h2>
              <p>Goal: {props.goal}</p>
              <p>Skills Used: {props.skills}</p>
            </article>
          </section>
        </div>
      </a>
    </>
  );
};
