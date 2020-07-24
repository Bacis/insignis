import React, { useState, useEffect } from 'react'
import { TweenMax, TimelineMax, Back, gsap } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

/* Motion graphics images */
import motionImg from './assets/images/B-duck.jpg'
import motionImg1 from './assets/images/Virgin-motion.jpg'
import motionImg2 from './assets/images/oppo-c.jpg'
import motionImg3 from './assets/images/Lakers.jpg'

/* Mobile apps */
import mobileImg from './assets/images/mosquee-app.jpg'
import mobileImg1 from './assets/images/sbm-c.jpg'

/* Blur video */
import blurVideo from './assets/Neon-blue.mp4'

import TopMenu from './components/TopMenu'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Websites from './components/Websites'
import AndMore from './components/AndMore'
import LabelSlide from './components/LabelSlide'
import Label from './components/Label'
import Team from './components/Team'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import ShowCaseAll from './components/ShowCaseAll'

import './sass/main.scss'

gsap.registerPlugin(ScrollMagicPluginGsap)
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Back)
TweenMax.defaultOverwrite = true

const App = () => {
  const controller = new ScrollMagic.Controller()
  const [backgroundColor, setBackgroundColor] = useState('')
  const [backgroundVideo, setBackgroundVideo] = useState('')
  const windowHeight = window.innerHeight
  let videoRef

  useEffect(() => {
    videoRef = document.getElementById('blurVideo')
  })

  const motionShowcaseImages = [
    {
      src: motionImg,
      alt: 'Image alt motion 1',
      class: 'motion-img-1',
      hoverColor: 'blue',
    },
    {
      src: motionImg1,
      alt: 'Image alt motion 2',
      class: 'motion-img-2',
      hoverColor: 'blue',
    },
    {
      src: motionImg2,
      alt: 'Image alt motion 3',
      class: 'motion-img-3',
      hoverColor: 'red',
    },
    {
      src: motionImg3,
      alt: 'Image alt motion 4',
      class: 'motion-img-4',
      hoverColor: 'red',
    },
  ]

  const mobileShowcaseImages = [
    {
      src: mobileImg,
      alt: 'Image alt mobile 1',
      class: 'mobile-img-1',
      hoverColor: 'blue',
    },
    {
      src: mobileImg1,
      alt: 'Image alt mobile 2',
      class: 'mobile-img-2',
      hoverColor: 'red',
    },
  ]

  const hoverLeave = () => {
    if (videoRef) {
      videoRef.pause()
      setBackgroundVideo('fadeout')
    }
  }

  const hoverOn = () => {
    if (videoRef) {
      videoRef.play()
      setBackgroundVideo('fadein')
    }
  }

  return (
    <>
      <video
        src={blurVideo}
        type="video/mp4"
        id="blurVideo"
        loop
        preload="none"
        className={`${backgroundVideo}`}
        height={windowHeight}
        width={window.innerWidth}
      />
      <div className={`App default ${backgroundColor}`}>
        <header className="App-header">
          <TopMenu />
          <SideMenu />
        </header>
        <section className="scroll-magic">
          <Hero
            title="We are a group of independent designers and developers focused on
                creating outstanding"
          />
          <ShowCaseAll
            setBackgroundColor={setBackgroundColor}
            controller={controller}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
          />
          <AndMore controller={controller} />
          <Label title="We bring your company fearlessly forward to realize products that are ahead of their time." />
          <Label title="We are" />
          <LabelSlide controller={controller} />
          <Team title="Our team has been selected by the best" />
          <Portfolio setBackgroundColor={setBackgroundColor} />
          <ContactUs
            setBackgroundColor={setBackgroundColor}
            hoverLeave={hoverLeave}
            hoverOn={hoverOn}
          />
        </section>
      </div>
    </>
  )
}

export default App
