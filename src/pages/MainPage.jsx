
import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/FeatureSection'
import AnalysisCard from '../components/AnalysisCard'
import GeometryScene from '../components/GeometryScene'
const MainPage = () => {
 
  return (<>
   <Hero/>
  <section className='max-w-7xl mx-auto px-6 py-16'>
    <AnalysisCard/>
  </section>
  <section className='bg-olive-50'>
    <div className='max-w-7xl mx-auto px-6 py-16'>
     <Feature/>
    </div>
  </section>
  <GeometryScene/>
    </>
  );
}

export default MainPage
