import React, { useEffect } from 'react'
import { TweenMax, TimelineMax } from 'gsap'
import PropTypes from 'prop-types'
import * as ScrollMagic from 'scrollmagic'

import eclipseImg from '../assets/images/eclipse-c.png'
import medicineHelpImg from '../assets/images/medicine-help.png'
import perfectWellnessImg from '../assets/images/perfect-wellness.png'
import tattooInkImg from '../assets/images/tattoo-ink.png'

const Websites = props => {
  const { setBackgroundColor, controller } = props

  const eclipseRef = React.createRef()
  const medicineHelpRef = React.createRef()
  const perfectWellnessRef = React.createRef()
  const tattooInkRef = React.createRef()

  useEffect(() => {
    const webTimeline = new TimelineMax()
    const centerY = window.innerHeight / 10
    const webTween = TweenMax.fromTo(
      eclipseRef.current,
      6,
      { y: centerY, x: 0, width: 200, height: 120, opacity: 0, delay: 4 },
      { y: -600, x: -800, width: 400, height: 250, opacity: 1, delay: 4 }
    )

    const webTween1 = TweenMax.fromTo(
      medicineHelpRef.current,
      3,
      {
        x: 0,
        y: centerY,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: 800,
        y: centerY - 800,
        width: 400,
        height: 250,
        opacity: 1,
        delay: 5,
      }
    )

    const webTween2 = TweenMax.fromTo(
      perfectWellnessRef.current,
      7,
      {
        x: 0,
        y: centerY,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: 1000,
        y: centerY + 100,
        width: 400,
        height: 250,
        opacity: 1,
        delay: 5,
      }
    )

    const webTween3 = TweenMax.fromTo(
      tattooInkRef.current,
      8,
      {
        x: 0,
        y: centerY,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: -1000,
        y: centerY + 200,
        width: 400,
        height: 250,
        opacity: 1,
        delay: 4,
      }
    )

    webTimeline.add([webTween, webTween1, webTween2, webTween3])

    new ScrollMagic.Scene({
      triggerElement: '#websites',
      offset: 0,
      duration: 5000,
    })
      .setPin('#web-pin')
      .setTween(webTimeline)
      .addTo(controller)
  }, [])

  return (
    <div id="websites" className="brand-text">
      <div id="web-pin" className="pin">
        <img
          src={eclipseImg}
          alt="Eclipse website"
          ref={eclipseRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('blue')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <img
          src={medicineHelpImg}
          alt="Medicine help website"
          ref={medicineHelpRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('orange')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <img
          src={perfectWellnessImg}
          alt="Perfect wellness website"
          ref={perfectWellnessRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('red')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <img
          src={tattooInkImg}
          alt="Tattoo ink website"
          ref={tattooInkRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('red')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <div className="section-header">websites</div>
      </div>
    </div>
  )
}

Websites.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  controller: PropTypes.shape({
    addScene: PropTypes.func.isRequired,
    removeScene: PropTypes.func.isRequired,
  }).isRequired,
}

export default Websites
