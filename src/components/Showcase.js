import React, { useEffect } from 'react'
import { TimelineMax, TweenMax } from 'gsap'
import PropTypes from 'prop-types'
import * as ScrollMagic from 'scrollmagic'

const Showcase = props => {
  const { setBackgroundColor, controller, images, title } = props

  useEffect(() => {
    const timeline = new TimelineMax()

    const centerY = window.innerHeight / 10
    let tween
    let tween1
    let tween2
    let tween3
    if (images.length === 4) {
      tween = TweenMax.fromTo(
        `.${images[0].class}`,
        6,
        { y: centerY, x: 0, width: '17%', opacity: 0, delay: 4 },
        { y: -600, x: -800, width: '20%', opacity: 1, delay: 4 }
      )

      tween1 = TweenMax.fromTo(
        `.${images[1].class}`,
        3,
        {
          x: 0,
          y: centerY,
          width: '17%',
          opacity: 0,
        },
        {
          x: 800,
          y: centerY - 800,
          width: '20%',
          opacity: 1,
          delay: 5,
        }
      )

      tween2 = TweenMax.fromTo(
        `.${images[2].class}`,
        7,
        {
          x: 0,
          y: centerY,
          width: '17%',
          opacity: 0,
        },
        {
          x: 1000,
          y: centerY + 100,
          width: '20%',
          opacity: 1,
          delay: 5,
        }
      )

      tween3 = TweenMax.fromTo(
        `.${images[3].class}`,
        8,
        {
          x: 0,
          y: centerY,
          width: '17%',
          opacity: 0,
        },
        {
          x: -1000,
          y: centerY + 200,
          width: '20%',
          opacity: 1,
          delay: 4,
        }
      )
    } else {
      tween = TweenMax.fromTo(
        `.${images[0].class}`,
        6,
        { y: centerY, x: 0, width: '17%', opacity: 0, delay: 4 },
        { y: -600, x: -800, width: '20%', opacity: 1, delay: 4 }
      )

      tween1 = TweenMax.fromTo(
        `.${images[1].class}`,
        8,
        {
          x: 0,
          y: centerY,
          width: '17%',
          opacity: 0,
        },
        {
          x: -1000,
          y: centerY + 200,
          width: '20%',
          opacity: 1,
          delay: 4,
        }
      )
    }

    timeline.add(
      images.length === 4 ? [tween, tween1, tween2, tween3] : [tween, tween1]
    )

    new ScrollMagic.Scene({
      triggerElement: `#showcase-${title.replace(' ', '-')}`,
      offset: 0,
      duration: 5000,
    })
      .setPin(`#showcase-${title.replace(' ', '-')}-pin`)
      .setTween(timeline)
      .addTo(controller)
  }, [])

  return (
    <div id={`showcase-${title.replace(' ', '-')}`} className="brand-text">
      <div id={`showcase-${title.replace(' ', '-')}-pin`} className="pin">
        {images.map((img) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className={`tween ${img.class}`}
            onMouseEnter={() => setBackgroundColor(img.hoverColor)}
            onMouseLeave={() => setBackgroundColor('')}
          />
      ))}
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
  tweenCount: PropTypes.number,
}

Showcase.defaultProps = {
  tweenCount: 4,
}

export default Showcase
