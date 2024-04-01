import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Picture from "../components/Picture";
import intelCharts from "../assets/images/intel2.png";
import trainingSite from "../assets/images/trainingsite.png";
import BIG2 from "../assets/images/BIG2.png";
import LIB from "../assets/images/LIB.png";
import renImg from "../assets/images/renimg.png";
import ren from "../assets/images/ren.png";
import gympic2 from "../assets/images/gympic2.png";
import intel from "../assets/images/intel.png";
import un from "../assets/images/un.png";
import "../assets/css/masonry-grid.css";

export default function PicPage() {
  return (
    <section className="ml-[3%] md:ml-[5%] lg:ml-[8%] text-creme bg-dark-green flex">
      <ScrollAnimation animateIn="fadeIn">
        <div class="container">
          <Picture position="start" class="f" img={LIB} href="#" />
          <Picture
            position="start"
            class="b"
            img={renImg}
            href="https://www.ren.inc/platform"
          />
          <Picture
            class="a"
            img={intel}
            href="https://github.com/MerelJac/"
          />
          <Picture
            class="c"
            img={intelCharts}
            href="https://github.com/MerelJac/"
          />
          <Picture
            position="center"
            class="g"
            img={un}
            href="https://unworldoceansday.org/"
          />

          <Picture
            position="start"
            class="d"
            img={trainingSite}
            href="https://www.trainingbyana.com/"
          />
          <Picture class="i" img={ren} href="https://www.ren.inc/platform" />

          <Picture
            class="h"
            img={gympic2}
            href="https://github.com/MerelJac/GymGenius"
          />
          <Picture
            position="center"
            img={BIG2}
            class="e"
            href="https://www.buildingintegritygroup.com/"
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}
