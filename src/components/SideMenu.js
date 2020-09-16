import React from "react";

const SideMenu = (props) => {
  const {
    showCaseRef,
    contactUsRef,
    topPageRef,
    visionRef,
    clientsRef,
  } = props;

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="side-menu">
      <ol className="right">
        <li onClick={() => scrollTo(topPageRef)}>Home</li>
        <li onClick={() => scrollTo(showCaseRef)}>Works</li>
        <li onClick={() => scrollTo(visionRef)}>Vision</li>
        <li onClick={() => scrollTo(clientsRef)}>Clients</li>
        <li onClick={() => scrollTo(contactUsRef)}>Contact</li>
      </ol>
    </div>
  );
};

export default SideMenu;
