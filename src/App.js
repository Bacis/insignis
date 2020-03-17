import React, { useEffect, useState } from 'react'
import { TweenMax, TimelineMax, Back } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import { ReactComponent as Logo } from './assets/images/insignis-logo.svg'
import { ReactComponent as ContactUs } from './assets/images/contact-us.svg'
import { ReactComponent as BrandIdentities } from './assets/images/brand-identities.svg'
import { ReactComponent as Websites } from './assets/images/websites.svg'
import { ReactComponent as AndMore } from './assets/images/more.svg'
import './sass/main.scss'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Back)

function App() {
  const [backgroundColor, setBackgroundColor] = useState('default')

  useEffect(() => {
    const controller = new ScrollMagic.Controller()
    const brandTimeline = new TimelineMax()
    const brandTween = TweenMax.fromTo(
      '#brand-tween',
      3,
      { y: 300, x: 500, width: 200, height: 120, opacity: 0 },
      { y: 0, x: 100, width: 300, height: 190, opacity: 1 }
    )

    const brandTween1 = TweenMax.fromTo(
      '#brand-tween1',
      5,
      { x: 500, y: 350, width: 200, height: 120, opacity: 0 },
      { x: 800, y: -100, width: 300, height: 190, opacity: 1, delay: 1 }
    )

    const brandTween2 = TweenMax.fromTo(
      '#brand-tween2',
      5,
      { x: 500, y: 400, width: 200, height: 120, opacity: 0 },
      { x: 1200, y: 800, width: 300, height: 190, opacity: 1, delay: 2 }
    )

    brandTimeline.add([brandTween, brandTween1, brandTween2])

    new ScrollMagic.Scene({
      triggerElement: '#brand',
      duration: 1200,
      offset: 400,
    })
      .setPin('#brand-pin')
      .setTween(brandTimeline)
      .addTo(controller)
    new ScrollMagic.Scene({
      triggerElement: '#websites',
      duration: 600,
      offset: 400,
    })
      .setPin('#websites')
      .addTo(controller)
  }, [])

  return (
    <div className={`App default ${backgroundColor}`}>
      <header className="App-header">
        <div className="top-menu">
          <ol>
            <li className="logo">
              <Logo />
            </li>
            <li className="contact-us">
              <ContactUs />
            </li>
          </ol>
        </div>
        <div className="side-menu">
          <ol className="right">
            <li>Works</li>
            <li>Vision</li>
            <li>Contact</li>
          </ol>
        </div>
      </header>
      <section className="scroll-magic">
        <div className="row">
          <div id="hero" className="header-text">
            <div className="main-header">
              We are a group of independent designers and developers focused on
              creating outstanding
            </div>
          </div>
          <div id="brand" className="brand-text">
            <div
              id="brand-tween"
              className="tween"
              onMouseEnter={() => setBackgroundColor('blue')}
              onMouseLeave={() => setBackgroundColor('')}
            />
            <div id="brand-tween1" className="tween" />
            <div id="brand-tween2" className="tween" />
            <div id="brand-pin">
              <BrandIdentities />
            </div>
          </div>
          <div id="websites" className="brand-text">
            <div className="identities">
              <Websites />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
