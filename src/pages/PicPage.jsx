import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Picture from "../components/Picture";
import somethingborrowed from "../assets/images/something-borrowed.png";
import exerciseAPI from "../assets/images/exerciseAPI.png";
import trainingSite from "../assets/images/trainingsite.png";
import BIG from "../assets/images/BIG.png";
import BIG2 from "../assets/images/BIG2.png";
import LIB from "../assets/images/LIB.png";
import renImg from "../assets/images/renimg.png";
import gympic from "../assets/images/gympic.png";
import gymSignup from "../assets/images/gym-signup.png";
import celina from "../assets/images/celina.png";
import "../assets/css/masonry-grid.css";

export default function PicPage() {
  return (
    <section className="text-creme px-4 bg-dark-green">
      <ScrollAnimation animateIn="fadeIn">
        <div class="container">
            <Picture class="f" img={LIB} href="#" />
            <Picture class="b" img={renImg} href="https://www.ren.inc/platform" />
            <Picture
            class="a"
              img={gymSignup}
              href="https://github.com/MerelJac/GymGenius"
            />
            <Picture class="d" img={BIG} href="https://www.buildingintegritygroup.com/" />
            <Picture
            class="j"
              img={exerciseAPI}
              href="https://github.com/MerelJac/exerciseAPI-workoutGenerator"
            />
            <Picture
            class="c"
              img={somethingborrowed}
              href="https://github.com/MerelJac/Something-Borrowed"
            />
            <Picture class="g" img={celina} href="https://www.celina-ann-wellness.com/" />
          
            <Picture class="e" img={trainingSite} href="https://www.trainingbyana.com/" />
            <Picture class="i" img={renImg} href="https://www.ren.inc/platform" />

            <Picture
            class="h"
              img={gympic}
              href="https://github.com/MerelJac/GymGenius"
            />
            <Picture
              img={BIG2}
              class="k"
              href="https://www.buildingintegritygroup.com/"
            />
        </div>
      </ScrollAnimation>
    </section>
  );
}
