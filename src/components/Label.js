import React from 'react'
import PropTypes from 'prop-types'

const Label = props => {
  const { title } = props

  return (
    <div className="team">
      <div className="title">{title}</div>
    </div>
  )
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Label
