import React, { useEffect, useState } from 'react'
import { TweenMax, TimelineMax, Back } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import { ReactComponent as Websites } from './assets/images/websites.svg'
import { ReactComponent as AndMore } from './assets/images/more.svg'
import TopMenu from './components/TopMenu'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import Brand from './components/Brand'
import './sass/main.scss'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Back)
TweenMax.defaultOverwrite = false

function App() {
  const controller = new ScrollMagic.Controller()
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: '#websites',
      duration: 600,
    })
      .setPin('#website-pin')
      .addTo(controller)
    new ScrollMagic.Scene({
      triggerElement: '#and-more',
      duration: 600,
    })
      .setPin('#and-more-pin')
      .addTo(controller)
  }, [])

  return (
    <div className={`App default ${backgroundColor}`}>
      <header className="App-header">
        <TopMenu />
        <SideMenu />
      </header>
      <section className="scroll-magic">
        <div className="row">
          <Hero
            title="We are a group of independent designers and developers focused on
              creating outstanding"
          />
          <Brand
            setBackgroundColor={setBackgroundColor}
            controller={controller}
          />
          <div id="websites" className="brand-text">
            <div id="website-pin">
              <Websites />
            </div>
          </div>
          <div id="and-more" className="brand-text">
            <div id="and-more-pin">
              <AndMore />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
