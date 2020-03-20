import React from 'react'
import PropTypes from 'prop-types'
import teamMember from '../assets/images/teamMember.png'

const Team = props => {
  const { title } = props

  return (
    <div className="team">
      <div className="title">{title}</div>
      <div className="container">
        <div className="row">
          <div className="image">
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
            <img src={teamMember} alt="name" />
          </div>
        </div>
      </div>
    </div>
  )
}

Team.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Team
