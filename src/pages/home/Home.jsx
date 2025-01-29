import React from 'react'
import HeroPage from './HeroPage'
import Categories from './Categories'
import HowItWorks from './HowItWorks'
import RatedReviews from './RatedReviews'
import JoinNow from './JoinNow'

const Home = () => {
  return (
    <div>
      <HeroPage />
      <Categories />
      <HowItWorks />
      <RatedReviews />
      <JoinNow />
    </div>
  )
}

export default Home
