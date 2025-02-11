import React from 'react'
import HeroPage from './HeroPage'
import Categories from './Categories'
import HowItWorks from './HowItWorks'
import RatedReviews from './RatedReviews'
import JoinNow from './JoinNow'
import SEO from '../seo/SEO'

const Home = () => {
  return (
    <>
      <SEO
        title="Easy and Efficient way to find and connect with reliable suppliers"
        description="Procure is a platform that connects buyers with reliable suppliers. Find the best suppliers for your business needs with Procure."
        keywords="Procure, suppliers, business, platform, buyers"
      />
      <div>
        <HeroPage />
        <Categories />
        <HowItWorks />
        <RatedReviews />
        <JoinNow />
      </div>
    </>
  )
}

export default Home
