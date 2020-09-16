import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { title, visionRef } = props;

  return (
    <div ref={visionRef} className="team">
      <div className="row">
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

Label.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Label;
