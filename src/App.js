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
TweenMax.defaultOverwrite = false;

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [videoRef, setVideoRef] = useState(null);
  const windowHeight = window.innerHeight;
  let contactUs = React.createRef();
  let topPageRef = React.createRef();
  let showCaseRef = React.createRef();
  let visionRef = React.createRef();
  let clientsRef = React.createRef();

  useEffect(() => {
    setVideoRef(document.getElementById("blurVideo"));
  }, []);

  const hoverLeave = () => {
    if (videoRef) {
      setBackgroundVideo("fadeout");
    }
  };

  const hoverOn = () => {
    if (videoRef !== undefined) {
      videoRef
        .play()
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setBackgroundVideo("fadein");
  };

  return (
    <>
      <video
        src={blurVideo}
        type="video/mp4"
        id="blurVideo"
        loop
        muted
        preload="none"
        className={`${backgroundVideo}`}
        height={windowHeight}
        width={window.innerWidth}
      />
      <div ref={topPageRef} className={`App default ${backgroundColor}`}>
        <header className="App-header">
          <TopMenu
            contactUs={contactUs}
            topPageRef={topPageRef}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
          />
          <SideMenu
            clientsRef={clientsRef}
            visionRef={visionRef}
            topPageRef={topPageRef}
            showCaseRef={showCaseRef}
            contactUsRef={contactUs}
          />
        </header>
        <section className="scroll-magic">
          <Hero
            title="We are a group of independent designers and developers focused on
                creating outstanding brand identities"
          />
          <ShowCaseAll
            showCaseRef={showCaseRef}
            setBackgroundColor={setBackgroundColor}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
          />
          <AndMore />
          <Label
            visionRef={visionRef}
            title="We bring your company fearlessly forward to build products that are ahead of their time."
          />
          <LabelSlide />
          <Team
            clientsRef={clientsRef}
            title="Our team has been selected by the best"
          />
          <Portfolio setBackgroundColor={setBackgroundColor} />
          <ContactUs
            setBackgroundColor={setBackgroundColor}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
            contactUs={contactUs}
          />
        </section>
      </div>
    </>
  );
};

export default App;
