import React from "react";
import { HeaderText } from "./Header-text";
import { DetailText } from "../components/Detail-text";
import { Button } from "./Button";
import { Icon } from "./Header-icon";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";
import emailIcon from "../images/email.png";
import coverPhoto from "../images/coverPhoto.jpg";

export const MainText = (props) => {
  const sectionStyle = {
    backgroundImage: `url(${coverPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "30%",
    backgroundSize: "cover",
  };
  return (
    <>
      <section
        className="h-[100vh] flex justify-center items-end"
        style={sectionStyle}
      >
        <article className="text-end text-creme pb-20 pr-10">
          <HeaderText text={"MerelJac "} />
          <DetailText
            text={
              "Full Stack Software Engineer with a passion for building full stack, user-centric applications"
            }
          />
            <div className="flex flex-row justify-end items-center">
              <Icon
                src={`${githubIcon}`}
                alt={"GitHub/MerelJac"}
                link={"https://github.com/MerelJac"}
              />
              <Icon
                src={`${linkedinIcon}`}
                alt={"LinkedIn"}
                link={"https://www.linkedin.com/in/merel-b-jacobs"}
              />
              <Icon
                src={`${emailIcon}`}
                alt={"email"}
                link={"mailto:merel.burleigh@gmail.com"}
              />
            </div>
            <Button
              href={"https://www.coachmerel.com"}
              alt={"resume"}
              text={"Resume"}
            />
        </article>
      </section>
    </>
  );
};
