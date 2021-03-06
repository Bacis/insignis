import React from "react";
import PropTypes from "prop-types";

const Portfolio = (props) => {
  const { setBackgroundColor } = props;

  return (
    <div className="portfolio">
      <div className="row">
        <div className="title">
          <div>
            While we work on our website you can take a look at our work on
          </div>
          <div
            className="section-header"
            onMouseEnter={() => setBackgroundColor("behance")}
            onMouseLeave={() => setBackgroundColor("")}
          >
            behance
          </div>
          <div>and</div>
          <span
            className="section-header"
            onMouseEnter={() => setBackgroundColor("dribble")}
            onMouseLeave={() => setBackgroundColor("")}
          >
            dribbble
          </span>
          <div>or just</div>
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
};

export default Portfolio;
