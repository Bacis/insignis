import React, { useState, useEffect } from "react";
import { TweenMax, TimelineMax, Back, gsap } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

/* Blur video */
import blurVideo from "./assets/Neon-blue.mp4";

import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import AndMore from "./components/AndMore";
import LabelSlide from "./components/LabelSlide";
import Label from "./components/Label";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import ShowCaseAll from "./components/ShowCaseAll";

import "./sass/main.scss";

gsap.registerPlugin(ScrollMagicPluginGsap);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Back);
TweenMax.defaultOverwrite = true;

const App = () => {
  const controller = new ScrollMagic.Controller();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [videoRef, setVideoRef] = useState(null);
  const windowHeight = window.innerHeight;

  useEffect(() => {
    setVideoRef(document.getElementById("blurVideo"));
  }, []);

  const hoverLeave = () => {
    if (videoRef) {
      videoRef.pause();
      setBackgroundVideo("fadeout");
    }
  };

  const hoverOn = () => {
    if (videoRef) {
      videoRef.play();
      setBackgroundVideo("fadein");
    }
  };

  return (
    <>
      <video
        src={blurVideo}
        type="video/mp4"
        id="blurVideo"
        loop
        preload="none"
        className={`${backgroundVideo}`}
        height={windowHeight}
        width={window.innerWidth}
      />
      <div className={`App default ${backgroundColor}`}>
        <header className="App-header">
          <TopMenu />
          <SideMenu />
        </header>
        <section className="scroll-magic">
          <Hero
            title="We are a group of independent designers and developers focused on
                creating outstanding"
          />
          <ShowCaseAll
            setBackgroundColor={setBackgroundColor}
            controller={controller}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
          />
          <AndMore controller={controller} />
          <Label title="We bring your company fearlessly forward to realize products that are ahead of their time." />
          <Label title="We are" />
          <LabelSlide controller={controller} />
          <Team title="Our team has been selected by the best" />
          <Portfolio setBackgroundColor={setBackgroundColor} />
          <ContactUs
            setBackgroundColor={setBackgroundColor}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
          />
        </section>
      </div>
    </>
  );
};

export default App;
