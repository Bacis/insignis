import React from 'react'
import PropTypes from 'prop-types'
import Amazon from '../assets/images/amazon.svg'
import Google from '../assets/images/google.svg'
import Mtv from '../assets/images/mtv.svg'
import Eyem from '../assets/images/eyem.svg'
import Virgin from '../assets/images/virgin.svg'
import perfectWellness from '../assets/images/perfectWellness.svg'
import oppo from '../assets/images/oppo.svg'
import cn from '../assets/images/cn.svg'
import mijia from '../assets/images/mijia.svg'
import decathlon from '../assets/images/decathlon.svg'
import dzine from '../assets/images/dzine.svg'
import dayOne from '../assets/images/dayOne.svg'

const Team = props => {
  const { title } = props

  return (
    <div className="team">
      <div className="title">{title}</div>
      <div className="container">
        <div className="row">
          <div className="image">
            <img src={Amazon} alt="Amazon kindle" />
            <img src={Google} alt="Google" />
            <img src={Mtv} alt="Mtv" />
            <img src={Eyem} alt="Eyem" />
            <img src={Virgin} alt="Virgin" />
            <img src={perfectWellness} alt="Perfect Wellness" />
            <img src={oppo} alt="Oppo" />
            <img src={cn} alt="Cartoon network" />
            <img src={mijia} alt="Mijia" />
            <img src={decathlon} alt="Decathlon" />
            <img src={dzine} alt="Dzine elements" />
            <img src={dayOne} alt="Day One" />
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
