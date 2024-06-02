import React from 'react'
import DarkVariantExample from '../component/Carousel'
import TopDestination from '../component/PopularDestination/TopDestination';
import PopularTour from '../component/PopularTour/PopularTour';
import GalleryCard from '../component/Gallery/GalleryCard';

const Home = () => {
  return (
    <>
    <div className='mt-5'>
    <DarkVariantExample/>
   <TopDestination/>
   <PopularTour/>
   <GalleryCard/>
    </div>
    </>
  )
}

export default Home