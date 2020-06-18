import React, { useEffect } from 'react'
import { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import PropTypes from 'prop-types'

import dayOne from '../assets/images/dayone.jpg'
import pier13 from '../assets/images/pier-13.jpg'
import dzineElements from '../assets/images/DzineElements.jpg'
import jts from '../assets/images/JTS.png'

const Brand = props => {
  const { setBackgroundColor, controller } = props

  const dayOneRef = React.createRef()
  const pier13Ref = React.createRef()
  const dzineElementsRef = React.createRef()
  const jtsRef = React.createRef()

  const isMobile = window.innerWidth < 500

  useEffect(() => {
    const brandTimeline = new TimelineMax()
    const centerY = window.innerHeight / 10
    const tweenWidthFrom = isMobile ? '45%' : '17%'
    const tweenWidthTo = isMobile ? '48% ' : '20%'

    const brandTween = TweenMax.fromTo(
      dayOneRef.current,
      6,
      { y: centerY, x: 0, width: tweenWidthFrom, opacity: 0, delay: 4 },
      { y: -600, x: -800, width: tweenWidthTo, opacity: 1, delay: 4 }
    )

    const brandTween1 = TweenMax.fromTo(
      pier13Ref.current,
      3,
      {
        x: 0,
        y: centerY,
        width: tweenWidthFrom,
        opacity: 0,
      },
      {
        x: 800,
        y: centerY - 800,
        width: tweenWidthTo,
        opacity: 1,
        delay: 5,
      }
    )

    const brandTween2 = TweenMax.fromTo(
      dzineElementsRef.current,
      7,
      {
        x: 0,
        y: centerY,
        width: tweenWidthFrom,
        opacity: 0,
      },
      {
        x: 1000,
        y: centerY + 100,
        width: tweenWidthTo,
        opacity: 1,
        delay: 5,
      }
    )

    const brandTween3 = TweenMax.fromTo(
      jtsRef.current,
      8,
      {
        x: 0,
        y: centerY,
        width: tweenWidthFrom,
        opacity: 0,
      },
      {
        x: -1000,
        y: centerY + 200,
        width: tweenWidthTo,
        opacity: 1,
        delay: 4,
      }
    )

    brandTimeline.add([brandTween, brandTween1, brandTween2, brandTween3])

    new ScrollMagic.Scene({
      triggerElement: '#brand',
      offset: 0,
      duration: 5000,
    })
      .setPin('#brand-pin')
      .setTween(brandTimeline)
      .setClassToggle('#brand-pin', 'identities-test')
      .addTo(controller)
  }, [])

  return (
    <div id="brand" className="brand-text">
      <div id="brand-pin" className="identities">
        <img
          src={dayOne}
          alt="Day one brand"
          ref={dayOneRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('day-one')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <img
          src={pier13}
          alt="Pier13 brand"
          ref={pier13Ref}
          className="tween"
          onMouseEnter={() => setBackgroundColor('pier13')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <img
          src={dzineElements}
          alt="Dzine elements brand"
          ref={dzineElementsRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('dzineElement')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <img
          src={jts}
          alt="JTS brand"
          ref={jtsRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('jscSeries')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <div className="section-header">brand identities</div>
      </div>
    </div>
  )
}

Brand.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  controller: PropTypes.shape({
    addScene: PropTypes.func.isRequired,
    removeScene: PropTypes.func.isRequired,
  }).isRequired,
}

export default Brand
