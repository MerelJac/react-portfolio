import React, { useState } from "react";
import { Icon } from "./Header-icon";
import githubIcon from "../assets/images/github.png";


export const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const showDetails = () => {
    setIsHovered(true);
  };

  const hideDetails = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    position: "relative",
    gap: "5px",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const imgCSS = {
    width: "100%",
    display: "block",
    margin: "auto",
  };

  const content = {
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    position: "absolute",
    background: "rgba(0,0,0,0.6)",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: isHovered ? 1 : 0, // Toggle opacity based on isHovered state
    transition: "0.6s",
  };

  return (
    <>
      <a href={props.url}>
        <div
          style={cardStyle}
          onMouseOver={showDetails}
          onMouseOut={hideDetails}
        >
          <img style={imgCSS} src={props.img} alt="porfolio-example" />
          <article style={content}>
            <h2 className="text-md">{props.title}</h2>
            <p>{props.goal}</p>
            <div className="flex flex-row justify-between items-center">
              <p>{props.skills}</p>
              <Icon
                src={`${githubIcon}`}
                alt={"GitHub/MerelJac"}
                link={props.link}
              />
            </div>
          </article>
        </div>
      </a>
    </>
  );
};
