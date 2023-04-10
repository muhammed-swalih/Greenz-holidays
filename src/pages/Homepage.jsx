import React from 'react'
import Intro from '.././Components/HomepageComponets/Intro'
import Experience from '../Components/HomepageComponets/Experience'
import Popular from '../Components/HomepageComponets/Popular'
import TopDestinations from '../Components/HomepageComponets/TopDestinations'
import Offer from '../Components/HomepageComponets/Offer'
import Adventure from '../Components/HomepageComponets/Adventure'
import Footer from '../Components/HomepageComponets/Footer'

function Homepage() {
  return (
    <div>
        <Intro/>
        <Experience/>
        <Popular/>
        <TopDestinations/>
        <Offer/>
        <Adventure/>
        <Footer/>
    </div>
  )
}

export default Homepage