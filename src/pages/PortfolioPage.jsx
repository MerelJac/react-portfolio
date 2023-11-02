import React from "react";
import { HeaderText } from "../components/Header-text";
import { Card } from "../components/Porfolio-Card";
import somethingBorrowed from "../images/all-images/something-borrowed.png";
import fitnessApp from "../images/all-images/exerciseAPI.png";

export const Porfolio = () => {
  const portfolioItems = [
    {
      title: "Something Borrowed",
      goal: "Application to create, edit, and delete posts for user lending",
      skills: "JavaScript, mySQL, Node.js, Express Servers",
      url: "https://something-borrowed-ed75df030b5e.herokuapp.com/",
      img: somethingBorrowed,
      link: "https://github.com/MerelJac/Something-Borrowed",
    },
    {
      title: "Workout Generator",
      goal: "Randomly generate workouts with information for each exercise",
      skills: "3rd party APIs, JavaScript",
      url: "https://mereljac.github.io/exerciseAPI-workoutGenerator/workout.html",
      img: fitnessApp,
      link: "https://github.com/MerelJac/exerciseAPI-workoutGenerator",
    },
    {
      title: "take 3",
      goal: "take 3",
      skills: "take 1",
      url: "https://www.coachmerel.com",
      img: "https://plus.unsplash.com/premium_photo-1685145255405-05ffbe7ce81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/mereljac",
    },
  ];
  return (
    <>
      <section className="text-creme h-fit bg-dark-green p-[20px]">
        <HeaderText text={"Portfolio"} />
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
          {portfolioItems.map((item, index) => {
            return (
              <Card
                key={`portfolio-${index}`} // Unique key for each Card
                title={item.title}
                goal={item.goal}
                skills={item.skills}
                url={item.url}
                img={item.img}
                link={item.link}
              />
            );
          })}
        </section>
      </section>
    </>
  );
};
