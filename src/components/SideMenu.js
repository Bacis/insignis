import React from "react";

const SideMenu = (props) => {
  const { showCaseRef, contactUsRef } = props;

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="side-menu">
      <ol className="right">
        <li onClick={() => scrollTo(showCaseRef)}>Brands</li>
        <li onClick={() => scrollTo(showCaseRef)}>Website</li>
        <li onClick={() => scrollTo(showCaseRef)}>Mobile</li>
        <li onClick={() => scrollTo(showCaseRef)}>Motion</li>
        <li onClick={() => scrollTo(contactUsRef)}>Contact</li>
      </ol>
    </div>
  );
};

export default SideMenu;
