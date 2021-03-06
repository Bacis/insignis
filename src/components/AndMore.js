import React, { useEffect } from "react";
import { TweenMax } from "gsap";
import * as ScrollMagic from "scrollmagic";

const AndMore = () => {
  const controller = new ScrollMagic.Controller();
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: "#and-more",
      duration: 1100,
    })
      .setPin("#and-more-pin")
      .addTo(controller);
  }, []);

  const makeItRain = () => {
    const rainTween = TweenMax.fromTo(
      ".plus-tween-list div",
      {
        x: "random(-900, 900)",
        y: 0,
        display: "none",
        position: "absolute",
      },
      {
        duration: 2,
        y: "random(1500, 2000)",
        ease: "none",
        display: "inline-block",
        stagger: {
          each: 2,
          repeat: -1,
        },
      }
    ).seek(100);
    const plusTween = TweenMax.fromTo(
      ".and-more-section .plus",
      3,
      { x: 0, y: 0 },
      { y: 600 }
    );
    setInterval(() => {
      rainTween.seek(0);
      rainTween.pause(0);
      plusTween.seek(0);
      plusTween.pause(0);
    }, 2000);
  };

  return (
    <div id="and-more" className="brand-text">
      <div className="plus-tween-list">
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
        <div className="plus-tween">+</div>
      </div>
      <div id="and-more-pin">
        <div className="and-more-section" onMouseEnter={() => makeItRain()}>
          <div className="plus">+</div>
          <div className="and-more">and more</div>
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default AndMore;
