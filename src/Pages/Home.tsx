import React from 'react'
import MainEvents from '../Components/Home/MainEvents/MainEvents'
import AboutUs from '../Components/Home/AboutUs/AboutUs'
import Hero from '../Components/Home/Hero/Hero'
import IntroVideo from '../Components/Home/IntroVideo/IntroVideo'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="w-full max-sm:h-[20px] max-md:h-[80px] h-[120px] bg-black" />
      <AboutUs />
      <MainEvents />
      <IntroVideo />
    </div>
  )
}

export default Home