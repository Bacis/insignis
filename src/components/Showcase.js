import React, { useEffect } from 'react'
import { TimelineMax, TweenMax } from 'gsap'
import PropTypes from 'prop-types'
import * as ScrollMagic from 'scrollmagic'

const Showcase = props => {
  const { setBackgroundColor, controller, images, title } = props

  useEffect(() => {
    const timeline = new TimelineMax()

    const centerY = window.innerHeight / 10
    const tween = TweenMax.fromTo(
      images[0].ref.current,
      6,
      { y: centerY, x: 0, width: 200, height: 120, opacity: 0, delay: 4 },
      { y: -600, x: -800, width: 400, height: 250, opacity: 1, delay: 4 }
    )

    const tween1 = TweenMax.fromTo(
      images[1].ref.current,
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

    const tween2 = TweenMax.fromTo(
      images[2].ref.current,
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

    const tween3 = TweenMax.fromTo(
      images[3].ref.current,
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

    timeline.add([tween, tween1, tween2, tween3])

    new ScrollMagic.Scene({
      triggerElement: '#showcase',
      offset: 0,
      duration: 5000,
    })
      .setPin('#showcase-pin')
      .setTween(timeline)
      .addTo(controller)
  }, [])

  const listImages = images.map(img => (
    <img
      src={img.src}
      alt={img.alt}
      ref={img.ref}
      className="tween"
      onMouseEnter={() => setBackgroundColor(img.hoverColor)}
      onMouseLeave={() => setBackgroundColor('')}
    />
  ))

  return (
    <div id="showcase" className="brand-text">
      <div id="showcase-pin">
        {listImages}
        <div className="section-header">{title}</div>
      </div>
    </div>
  )
}

Showcase.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  controller: PropTypes.shape({
    addScene: PropTypes.func.isRequired,
    removeScene: PropTypes.func.isRequired,
  }).isRequired,
  images: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

export default Showcase
