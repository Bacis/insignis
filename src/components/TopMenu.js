import React, { useState } from 'react'
import { ReactComponent as Logo } from '../assets/images/insignis-logo.svg'

const TopMenu = () => {
  const [logoHover, setLogoHover] = useState('')

  return (
    <div className="top-menu">
      <ol>
        <li
          className={`logo ${logoHover}`}
          onMouseEnter={() => setLogoHover('active')}
          onMouseLeave={() => setLogoHover('inactive')}
        >
          <Logo />
        </li>
        <li className="contact-us">
          <div className="section-header">Contact us</div>
        </li>
      </ol>
    </div>
  )
}

export default TopMenu
