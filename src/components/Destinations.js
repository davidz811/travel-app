import React from 'react'
import borabora from '../assets/borabora.jpg';
import maldives from '../assets/maldives.jpg';
import keywest from '../assets/keywest.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const Destinations = () => {
  return (
    <div name='destinations' className='max-w-[1200px] mx-auto text-center py-16'>
            <h1>All-Inclusive Resorts</h1>
            <p className='py-3 font-serif'>On the Caribbean's Best Beaches</p>
            <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4 py-3 w-full'>
                <img className='w-full h-full object-cover md:col-span-3 row-span-2' src={borabora} />   
                <img className='w-full h-full object-cover' src={maldives} /> 
                <img className='w-full h-full object-cover' src={keywest} /> 
                <img className='w-full h-full object-cover' src={maldives2} />
                <img className='w-full h-full object-cover' src={maldives3} />   
            </div>
    </div>
  )
}

export default Destinations