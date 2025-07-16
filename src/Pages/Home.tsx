import React from 'react'
import MainEvents from '../Components/Home/MainEvents/MainEvents'
import AboutUs from '../Components/Home/AboutUs/AboutUs'
import Hero from '../Components/Home/Hero/Hero'
import IntroVideo from '../Components/Home/IntroVideo/IntroVideo'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <MainEvents />
      <IntroVideo />
    </div>
  )
}

export default Home