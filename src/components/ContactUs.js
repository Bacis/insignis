import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ContactUs = () => {
  const [background, setBackground] = useState('')

  return (
    <div className={`footer ${background}`}>
      <div
        className="section-header"
        onMouseEnter={() => setBackground('blur')}
        onMouseLeave={() => setBackground('')}
      >
        Contact us
      </div>
      <div className="grid-footer">
        <div className="column">
          <div className="city">Berlin</div>
          <div className="address">
            <p>Holzmarktstrasse 64</p>
            <p>10179 — Berlin</p>
            <p>DE +49 1577 1587 382</p>
          </div>
        </div>
        <div className="column">
          <div className="city">Athens</div>
          <p>Sokratous 6,</p>
          <p>15562 — Cholargos</p>
          <p>GR +306978455765</p>
        </div>
        <div className="column">
          <div className="city">Genoa</div>
          <p>Via San Fruttuoso 2</p>
          <p>16143 — Genoa</p>
          <p>IT +39 333 617 0799</p>
        </div>
      </div>
      <div className="grid-footer-social">
        <div className="social">Behance</div>
        <div className="social">Dribble</div>
        <div className="social">Facebook</div>
        <div className="social">Instagram</div>
      </div>
    </div>
  )
}

ContactUs.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
}

export default ContactUs
