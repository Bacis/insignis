import React, { useEffect, useState } from "react";
import { TweenMax } from "gsap";
import PropTypes from "prop-types";
import ShowcaseProject from "./showcase/ShowcaseProject";
import {
  brandProjects,
  motionShowcaseImages,
  mobileShowcaseImages,
  websiteProjects,
} from "../utils";

const ShowCaseAll = (props) => {
  const { setBackgroundColor } = props;

  const [brandTween, setBrandTween] = useState(null);
  const [websiteTween, setWebsiteTween] = useState(null);

  useEffect(() => {
    setBrandTween(
      TweenMax.fromTo(
        "#showcases .brand, #showcases .mobile",
        50,
        { x: 0 },
        {
          x: -1500,
          repeat: 1,
        }
      )
    );

    setWebsiteTween(
      TweenMax.fromTo(
        "#showcases .websites, #showcases .motion",
        50,
        { x: -1500 },
        {
          x: 0,
          repeat: 1,
        }
      )
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

  return (
    <div id="showcases">
      <ShowcaseProject
        title="Brand identities / Brand identities / Brand identities / Brand
        identities / Brand identities / Brand identities"
        className="brand"
        setBackgroundColor={setBackgroundColor}
        projects={brandProjects}
        playTweens={playTweens}
        pauseTweens={pauseTweens}
      />
      <ShowcaseProject
        title="Web design / Web design / Web design / Web design / Web design / Web
        design / Web design"
        className="websites"
        setBackgroundColor={setBackgroundColor}
        projects={websiteProjects}
        playTweens={playTweens}
        pauseTweens={pauseTweens}
      />
      <ShowcaseProject
        title="Mobile app / Mobile app / Mobile app / Mobile app / Mobile app / Mobile
        app / Mobile app"
        className="mobile"
        setBackgroundColor={setBackgroundColor}
        projects={mobileShowcaseImages}
        playTweens={playTweens}
        pauseTweens={pauseTweens}
      />
      <ShowcaseProject
        title="Motion graphics / Motion graphics / Motion graphics / Motion graphics /
        Motion graphics / Motion graphics"
        className="motion"
        setBackgroundColor={setBackgroundColor}
        projects={motionShowcaseImages}
        playTweens={playTweens}
        pauseTweens={pauseTweens}
      />
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