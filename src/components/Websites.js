import React, { useEffect } from 'react'
import { TweenMax, TimelineMax } from 'gsap'
import PropTypes from 'prop-types'
import * as ScrollMagic from 'scrollmagic'

const Websites = props => {
  const { setBackgroundColor, controller } = props

  const webTweenRef = React.createRef()
  const webTweenRef1 = React.createRef()
  const webTweenRef2 = React.createRef()

  useEffect(() => {
    const webTimeline = new TimelineMax()
    const centerY = window.innerHeight / 10
    const centerX = window.innerWidth / 2
    const webTween = TweenMax.fromTo(
      webTweenRef.current,
      6,
      { y: centerY, x: centerX, width: 200, height: 120, opacity: 0, delay: 4 },
      { y: -600, x: 100, width: 300, height: 190, opacity: 1, delay: 4 }
    )

    const webTween1 = TweenMax.fromTo(
      webTweenRef1.current,
      3,
      {
        x: centerX,
        y: centerY,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: centerX + 1000,
        y: centerY - 500,
        width: 300,
        height: 190,
        opacity: 1,
        delay: 5,
      }
    )

    const webTween2 = TweenMax.fromTo(
      webTweenRef2.current,
      7,
      {
        x: centerX,
        y: centerY,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: centerX + 1000,
        y: centerY + 100,
        width: 300,
        height: 190,
        opacity: 1,
        delay: 5,
      }
    )

    webTimeline.add([webTween, webTween1, webTween2])

    new ScrollMagic.Scene({
      triggerElement: '#websites',
      offset: 0,
      duration: 900,
    })
      .setPin('#web-pin')
      .setTween(webTimeline)
      .addTo(controller)
  }, [])

  return (
    <div id="websites" className="brand-text">
      <div id="web-pin">
        <div
          ref={webTweenRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('blue')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <div
          ref={webTweenRef1}
          className="tween"
          onMouseEnter={() => setBackgroundColor('orange')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <div
          ref={webTweenRef2}
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
