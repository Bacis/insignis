import React, { useEffect } from 'react'
import { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import PropTypes from 'prop-types'
import { ReactComponent as BrandIdentities } from '../assets/images/brand-identities.svg'

const Brand = props => {
  const { setBackgroundColor, controller } = props

  const brandTweenRef = React.createRef()
  const brandTweenRef1 = React.createRef()
  const brandTweenRef2 = React.createRef()

  useEffect(() => {
    const brandTimeline = new TimelineMax()
    const brandTween = TweenMax.fromTo(
      brandTweenRef.current,
      6,
      { y: 0, x: 500, width: 200, height: 120, opacity: 0, delay: 4 },
      { y: -600, x: 100, width: 300, height: 190, opacity: 1, delay: 4 }
    )

    const brandTween1 = TweenMax.fromTo(
      brandTweenRef1.current,
      3,
      {
        x: 500,
        y: 0,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: 800,
        y: -500,
        width: 300,
        height: 190,
        opacity: 1,
        delay: 5,
      }
    )

    const brandTween2 = TweenMax.fromTo(
      brandTweenRef2.current,
      7,
      {
        x: 500,
        y: 0,
        width: 200,
        height: 120,
        opacity: 0,
      },
      {
        x: 800,
        y: 100,
        width: 300,
        height: 190,
        opacity: 1,
        delay: 5,
      }
    )

    brandTimeline.add([brandTween, brandTween1, brandTween2])

    new ScrollMagic.Scene({
      triggerElement: '#brand',
      offset: 0,
      duration: 900,
    })
      .setPin('#brand-pin')
      .setTween(brandTimeline)
      .addTo(controller)
  }, [])

  return (
    <div id="brand" className="brand-text">
      <div id="brand-pin">
        <div
          ref={brandTweenRef}
          className="tween"
          onMouseEnter={() => setBackgroundColor('blue')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <div
          ref={brandTweenRef1}
          className="tween"
          onMouseEnter={() => setBackgroundColor('orange')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <div
          ref={brandTweenRef2}
          className="tween"
          onMouseEnter={() => setBackgroundColor('red')}
          onMouseLeave={() => setBackgroundColor('')}
        />
        <BrandIdentities />
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
