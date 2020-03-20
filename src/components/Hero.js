import React from 'react'
import PropTypes from 'prop-types'

const Hero = props => {
  const { title } = props

  return (
    <div id="hero" className="header-text">
      <div className="hero-section">
        <div className="main-header">{title}</div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Hero
