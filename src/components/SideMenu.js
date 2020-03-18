import React, { useState } from 'react'

const SideMenu = () => {
  const [worksHover, setWorksHover] = useState('')
  const [visionHover, setVisionHover] = useState('')
  const [contactHover, setContactHover] = useState('')

  return (
    <div className="side-menu">
      <ol className="right">
        <li
          className={worksHover}
          onMouseEnter={() => setWorksHover('active')}
          onMouseLeave={() => setWorksHover('inactive')}
        >
          Works
        </li>
        <li
          className={visionHover}
          onMouseEnter={() => setVisionHover('active')}
          onMouseLeave={() => setVisionHover('inactive')}
        >
          Vision
        </li>
        <li
          className={contactHover}
          onMouseEnter={() => setContactHover('active')}
          onMouseLeave={() => setContactHover('inactive')}
        >
          Contact
        </li>
      </ol>
    </div>
  )
}

export default SideMenu
