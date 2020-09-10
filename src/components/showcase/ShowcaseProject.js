import React, { useState } from "react";
import PropTypes from "prop-types";

const ShowcaseProject = (props) => {
  const {
    title,
    setBackgroundColor,
    projects,
    playTweens,
    pauseTweens,
    className,
  } = props;
  const [toggleShowcase, setToggleShowcase] = useState("");

  return (
    <div className="showcase-project">
      <div
        className={`section-header ${className}`}
        onClick={() =>
          setToggleShowcase(
            toggleShowcase === "open-showcase" ? "" : "open-showcase"
          )
        }
        onMouseLeave={() => playTweens()}
        onMouseEnter={() => pauseTweens()}
      >
        {title}
      </div>
      <div className={`brand-portfolio ${toggleShowcase}`}>
        {projects.map((project) => (
          <div
            className={`content-area ${
              project.floatLeft ? "start" : "flexEnd"
            }`}
          >
            {project.floatLeft ? (
              <>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={project.alt}
                    src={project.src}
                    alt={project.alt}
                    onMouseEnter={() => setBackgroundColor(project.hoverKey)}
                    onMouseLeave={() => setBackgroundColor("")}
                  />
                </a>
                <div className="text">
                  <h1>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h1>
                  <div className="info">
                    <div className="see-more"></div>
                    <div className="label">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.info}
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text alignRight">
                  <h1>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h1>
                  <div className="info">
                    <div className="see-more"></div>
                    <div className="label">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.info}
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src={project.src}
                  alt={project.alt}
                  onMouseEnter={() => setBackgroundColor(project.hoverKey)}
                  onMouseLeave={() => setBackgroundColor("")}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ShowcaseProject.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  projects: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowcaseProject;
