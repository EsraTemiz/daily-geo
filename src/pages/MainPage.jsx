
import React from 'react'
import geo from '../assets/geo-gorsel.svg'
import Hero from '../components/Hero'
import Feature from '../components/FeatureSection'
import AnalysisCard from '../components/AnalysisCard'

const MainPage = () => {
 
  return (<>
   <Hero/>
  <section className='max-w-7xl mx-auto px-6 py-16'>
    <AnalysisCard/>
  </section>
  <section className='max-w-7xl mx-auto px-6 py-16'>
   <Feature/>
  </section>
    </>
  );
}

export default MainPage
