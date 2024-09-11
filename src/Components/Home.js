import React from 'react'
import Hero from './Hero'
// import Insights from './Insights'
import ImageText from './ImageText'
import NewsUpdates from './NewsUpdates'
import Squad from './Squad'
import Gallery from './Gallery'
import PointTable from './PointTable'
import Sponsors from './Sponsors'

const Home = () => {
  return (
    <>
    <Hero/>
    {/* <Insights/> */}
    <ImageText/>
    <NewsUpdates/>
    <Squad/>
    <Gallery/>
    <PointTable/>
    <Sponsors/>
    </>
  )
}

export default Home