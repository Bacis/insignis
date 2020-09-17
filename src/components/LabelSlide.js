import React, { useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";
import * as ScrollMagic from "scrollmagic";
import Label from "./Label";

const LabelSlide = () => {
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    const slideTimeline = new TimelineMax();
    const slideTween = TweenMax.fromTo(
      ".labelSlideOverlay",
      8,
      { width: "120%" },
      { width: "0%" }
    );

    const textIncreaseTween = TweenMax.fromTo(
      ".label-slide-pin .title",
      8,
      {
        css: {
          transform: "scale(1) translateZ(0)",
          transition: "transform 0.5s ease-out",
        },
      },
      {
        css: {
          transform: "scale(80, 90) translateZ(0)",
          transition: "transform 0.5s ease-out",
        },
        delay: 8,
      }
    );

    slideTimeline.add([slideTween, textIncreaseTween]);

    new ScrollMagic.Scene({
      triggerElement: "#label-pin",
      duration: 4000,
    })
      .setTween(slideTimeline)
      .addTo(controller);
  });

  return (
    <div className="label-container">
      <Label title="We are" />
      <div className="label-area">
        <div className="label-slide">
          <div className="labelSlideOverlay" />
          <div className="label-slide-pin">
            <div className="title">insignis</div>
          </div>
        </div>
      </div>
      <div id="label-pin"></div>
    </div>
  );
};

export default LabelSlide;
