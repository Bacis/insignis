import React, { useState, useEffect } from "react";
import { TweenMax } from "gsap";
import PropTypes from "prop-types";

import ShowcaseProject from "./showcase/ShowcaseProject";

import dayOne from "../assets/images/dayone.jpg";
import pier13 from "../assets/images/pier-13.jpg";
import dzineElements from "../assets/images/DzineElements.jpg";
import jts from "../assets/images/JTS.png";

const brandProjects = [
  {
    src: dayOne,
    alt: "day one alt text",
    hoverKey: "day-one",
    title: "Day one",
    info: "See more",
    floatLeft: true,
  },
  {
    src: pier13,
    alt: "pier13 alt text",
    hoverKey: "pier13",
    title: "Pier13",
    info: "See more",
    floatLeft: false,
  },
  {
    src: dzineElements,
    alt: "dzine Elements alt text",
    hoverKey: "dzineElement",
    title: "Dzine Elements",
    info: "See more",
    floatLeft: true,
  },
  {
    src: jts,
    alt: "Jts alt text",
    hoverKey: "jscSeries",
    title: "Jsc Series",
    info: "See more",
    floatLeft: false,
  },
];

const ShowCaseAll = (props) => {
  const { setBackgroundColor } = props;

  const [portfolioClass, setPortfolioClass] = useState("");

  let brandTween;
  let websiteTween;

  useEffect(() => {
    brandTween = TweenMax.fromTo(
      "#showcases .brand",
      50,
      { x: 0 },
      {
        x: -1500,
        repeat: 1,
      }
    );

    websiteTween = TweenMax.fromTo(
      "#showcases .websites",
      50,
      { x: -1500 },
      {
        x: 0,
        repeat: 1,
      }
    );
  }, []);

  const pauseTweens = () => {
    if (brandTween && websiteTween) {
      brandTween.pause();
      websiteTween.pause();
    }
  };

  const playTweens = () => {
    if (brandTween && websiteTween) {
      brandTween.play();
      websiteTween.play();
    }
  };

  const bundleFunctions = () => {
    if (portfolioClass === "brand-open") {
      pauseTweens();
    } else {
      playTweens();
    }
    setPortfolioClass(portfolioClass === "brand-open" ? "" : "brand-open");
  };

  return (
    <div id="showcases">
      <div className="showcase-pin" />
      <div
        className="section-header brand"
        onClick={() => bundleFunctions()}
        onMouseLeave={() => playTweens()}
        onMouseEnter={() => pauseTweens()}
      >
        Brand identities / Brand identities / Brand identities / Brand
        identities / Brand identities / Brand identities
      </div>
      <ShowcaseProject
        setBackgroundColor={setBackgroundColor}
        portfolioClass={portfolioClass}
        projects={brandProjects}
      />
      <div
        className="section-header websites"
        onMouseLeave={() => playTweens()}
        onMouseEnter={() => pauseTweens()}
      >
        Web design / Web design / Web design / Web design / Web design / Web
        design / Web design
      </div>
      <div
        className="section-header mobile"
        onMouseLeave={() => playTweens()}
        onMouseEnter={() => pauseTweens()}
      >
        Mobile app / Mobile app / Mobile app / Mobile app / Mobile app / Mobile
        app / Mobile app
      </div>
      <div
        className="section-header motion"
        onMouseLeave={() => playTweens()}
        onMouseEnter={() => pauseTweens()}
      >
        Motion graphics / Motion graphics / Motion graphics / Motion graphics /
        Motion graphics / Motion graphics
      </div>
    </div>
  );
};

ShowCaseAll.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  controller: PropTypes.shape({
    addScene: PropTypes.func.isRequired,
    removeScene: PropTypes.func.isRequired,
  }).isRequired,
  hoverLeave: PropTypes.func.isRequired,
  hoverOn: PropTypes.func.isRequired,
};

export default ShowCaseAll;
