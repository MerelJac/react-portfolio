import React from "react";
import { HeaderText } from "../components/Header-text";
import { Card } from "../components/Porfolio-Card";

export const Porfolio = () => {
  const portfolioItems = [
    {
      title: "take 1",
      goal: "take 1",
      skills: "take 1",
      link: "https://www.coachmerel.com",
      img: "https://plus.unsplash.com/premium_photo-1685145255405-05ffbe7ce81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "take 2",
      goal: "take 2",
      skills: "take 2",
      link: "https://www.coachmerel.com",
      img: "https://plus.unsplash.com/premium_photo-1685145255405-05ffbe7ce81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "take 3",
      goal: "take 3",
      skills: "take 1",
      link: "https://www.coachmerel.com",
      img: "https://plus.unsplash.com/premium_photo-1685145255405-05ffbe7ce81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
  ];
  return (
    <>
    <section className="bg-dark-green text-creme h-fit">
      <HeaderText text={"Portfolio"} />
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {portfolioItems.map((item, index) => {
          return (
            <Card
              key={`portfolio-${index}`} // Unique key for each Card
              title={item.title}
              goal={item.goal}
              skills={item.skills}
              url={item.link}
              img={item.img}
            />
          );
        })}
      </section>
      </section>
    </>
  );
};
