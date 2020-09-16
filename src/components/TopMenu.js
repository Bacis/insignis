import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/insignis-logo.svg";

const TopMenu = (props) => {
  const { topPageRef, hoverLeave, hoverOn } = props;
  const [logoHover, setLogoHover] = useState("");

  const scrollToTop = () => {
    topPageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="top-menu">
      <ol>
        <li
          className={`logo ${logoHover}`}
          onClick={() => scrollToTop()}
          onMouseEnter={() => setLogoHover("active")}
          onMouseLeave={() => setLogoHover("inactive")}
        >
          <Logo />
        </li>
        <li className="contact-us">
          <div
            onMouseEnter={() => hoverOn()}
            onMouseLeave={() => hoverLeave()}
            className="section-header"
          >
            <a href="mailto:hello@insignis.design">Contact us</a>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TopMenu;
