import React, { useState } from 'react'
import { TweenMax, TimelineMax, Back } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import TopMenu from './components/TopMenu'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Websites from './components/Websites'
import AndMore from './components/AndMore'
import LabelSlide from './components/LabelSlide'
import Team from './components/Team'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import './sass/main.scss'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Back)
TweenMax.defaultOverwrite = false

function App() {
  const controller = new ScrollMagic.Controller()
  const [backgroundColor, setBackgroundColor] = useState('')

  return (
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
        <Brand
          setBackgroundColor={setBackgroundColor}
          controller={controller}
        />
        <Websites
          setBackgroundColor={setBackgroundColor}
          controller={controller}
        />
        <AndMore controller={controller} />
        <Hero title="We bring your company fearlessly forward to realize products that are ahead of their time." />
        <Hero title="We are" />
        <LabelSlide controller={controller} />
        <Team title="Our team has been selected by the best" />
        <Portfolio setBackgroundColor={setBackgroundColor} />
        <ContactUs setBackgroundColor={setBackgroundColor} />
      </section>
    </div>
  )
}

export default App
