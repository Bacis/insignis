import React, { useEffect } from 'react'
import { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from 'scrollmagic'

const LabelSlide = props => {
  const { controller } = props

  useEffect(() => {
    const slideTimeline = new TimelineMax()
    const slideTween = TweenMax.fromTo(
      '.labelSlideOverlay',
      5,
      { width: '120%' },
      { width: '0%' }
    )

    const textIncreaseTween = TweenMax.fromTo(
      '.label-slide-pin .title',
      5,
      { scale: 1 },
      { scale: 7, delay: 5 }
    )

    slideTimeline.add([slideTween, textIncreaseTween])

    new ScrollMagic.Scene({
      triggerElement: '.label-slide-pin',
      duration: 300,
    })
      .setTween(slideTimeline)
      .addTo(controller)
  })

  return (
    <div id="label-slide-pin">
      <div className="labelSlideOverlay" />
      <div className="label-slide-pin">
        <div className="title">insignis</div>
      </div>
    </div>
  )
}

export default LabelSlide
