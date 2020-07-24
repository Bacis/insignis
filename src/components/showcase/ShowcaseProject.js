import React from 'react'
import PropTypes from 'prop-types'

const ShowcaseProject = props => {
  const { setBackgroundColor, portfolioClass, projects } = props

  return (
    <div className={`brand-portfolio ${portfolioClass}`}>
      {projects.map(project => (
        <div className="content-area">
          {project.floatLeft ? (
            <>
              <img
                key={project.alt}
                src={project.src}
                alt={project.alt}
                onMouseEnter={() => setBackgroundColor(project.hoverKey)}
                onMouseLeave={() => setBackgroundColor('')}
              />
              <div className="text">
                <h1>{project.title}</h1>
                <div className="info">{project.info}</div>
              </div>
            </>
          ) : (
            <>
              <div className="text alignRight">
                <h1>{project.title}</h1>
                <div className="info">{project.info}</div>
              </div>
              <img
                src={project.src}
                alt={project.alt}
                onMouseEnter={() => setBackgroundColor(project.hoverKey)}
                onMouseLeave={() => setBackgroundColor('')}
              />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

ShowcaseProject.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  portfolioClass: PropTypes.string.isRequired,
  projects: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

export default ShowcaseProject
