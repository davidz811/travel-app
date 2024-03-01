import React from 'react'
import beachvid from '../assets/beachVid.mp4';
import {BiSearch} from 'react-icons/bi';

const Hero = () => {
  return (
    <div name='hero' className='h-screen w-full'>
        <video className='w-full h-full object-cover' src={beachvid} autoPlay loop muted/>
        <div className='absolute h-full w-full top-0 left-0 flex justify-center items-center'>
          <div className='w-full text-center'>
            <h1 className='text-white p-4'>First Class Travel</h1>
            <p className='text-3xl font-bold text-white'>Top 1% Locations Worldwide</p>
            <form className='mt-3 flex justify-between rounded-md h-10 items-center mx-auto border-p-1 max-w-[450px] md:max-w-[550px] w-full bg-gray-100'>
              <div>
                <input className='p-3 focus:outline-none w-[300px] md:w-[500px] bg-transparent' type='text' placeholder='Search Destination'/>
              </div>
              <button>
                <BiSearch size={30} color='white' />
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Hero