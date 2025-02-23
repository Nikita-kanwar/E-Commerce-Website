import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'

const Home = () => {
  return (
    <div>
        <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  )
}

export default Home