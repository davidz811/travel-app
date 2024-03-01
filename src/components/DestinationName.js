import React from 'react'
import borabora from '../assets/borabora.jpg';
import maldives from '../assets/maldives.jpg';
import keywest from '../assets/keywest.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import borabora2 from '../assets/borabora2.jpg';
import DestinationCard from './DestinationCard';


const DestinationName = () => {
  return (
    <div name='travel' className='max-w-[1240px] mx-auto py-16 grid grid-cols-2 lg:grid-cols-3 gap-5 lg:grid-rows-2'>
        <DestinationCard img={borabora} name='BoraBora' />
        <DestinationCard img={keywest} name='KeyWest' />
        <DestinationCard img={maldives2} name='Jamaica' />
        <DestinationCard img={borabora2} name='Cozumel' />
        <DestinationCard img={maldives} name='Maldives' />
        <DestinationCard img={maldives3} name='Antigua' />
        
    </div>
  )
}

export default DestinationName