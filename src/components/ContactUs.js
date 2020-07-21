import React, { useState, useEffect } from 'react'
import blurVideo from '../assets/Neon-blue.mp4'

const ContactUs = () => {
  const [background, setBackground] = useState('')
  const [socialBackground, setSocialBackground] = useState('fadeout')
  const windowHeight = window.innerHeight
  let videoRef

  useEffect(() => {
    videoRef = document.getElementById('blurVideo')
  })

  const hoverLeave = () => {
    if (videoRef) {
      videoRef.pause()
      setBackground('fadeout')
    }
  }

  const hoverOn = () => {
    if (videoRef) {
      videoRef.play()
      setBackground('fadein')
    }
  }

  return (
    <>
      <div className="footer">
        <video
          src={blurVideo}
          type="video/mp4"
          id="blurVideo"
          loop
          preload="none"
          className={`${background}`}
          height={windowHeight}
          width={window.innerWidth}
        />
        <div id="blurSocialMedia" className={`${socialBackground}`} />
        <div
          className="section-header"
          onMouseEnter={() => hoverOn()}
          onMouseLeave={() => hoverLeave()}
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
        <div className="hover-area">
          <div className="row">
            <div className="grid-footer-social">
              <div className="social">
                <a
                  href="https://www.behance.net/insignisdesign"
                  rel="noopener noreferrer"
                  target="_blank"
                  onMouseEnter={() => setSocialBackground('fadein behance')}
                  onMouseLeave={() => setSocialBackground('fadeout')}
                >
                  Behance
                </a>
              </div>
              <div className="social">
                <a
                  href="https://dribbble.com/yuriorbital"
                  rel="noopener noreferrer"
                  target="_blank"
                  onMouseEnter={() => setSocialBackground('fadein dribble')}
                  onMouseLeave={() => setSocialBackground('fadeout')}
                >
                  Dribble
                </a>
              </div>
              <div className="social">
                <a
                  href="https://www.facebook.com/insigniscollective"
                  rel="noopener noreferrer"
                  target="_blank"
                  onMouseEnter={() => setSocialBackground('fadein facebook')}
                  onMouseLeave={() => setSocialBackground('fadeout')}
                >
                  Facebook
                </a>
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/company/42417318/"
                  rel="noopener noreferrer"
                  target="_blank"
                  onMouseEnter={() => setSocialBackground('fadein facebook')}
                  onMouseLeave={() => setSocialBackground('fadeout')}
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
