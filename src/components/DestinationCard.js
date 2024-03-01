import React from 'react'

const DestinationCard = ({img, name}) => {
  return (
    <div className='relative'>
            <img className='w-full h-full' src={img} />
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-white font-bold text-3xl absolute'>{name}</p>
            </div>
    </div>
  )
}

export default DestinationCard