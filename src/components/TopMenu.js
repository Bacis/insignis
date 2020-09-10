import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/insignis-logo.svg";

const TopMenu = (props) => {
  const { contactUs, topPageRef } = props;
  const [logoHover, setLogoHover] = useState("");

  const scrollToBottom = () => {
    contactUs.current.scrollIntoView({ behavior: "smooth" });
  };

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
          <div onClick={() => scrollToBottom()} className="section-header">
            Contact us
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TopMenu;
