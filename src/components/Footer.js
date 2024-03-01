import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100'>
        <h1 className='md:ml-28 py-6'>BEACHES.</h1>
        <div className='w-full flex justify-evenly h-[80px] h-full'>  
            <ul className='flex flex-col lg:flex-row'>
                <li>About</li>
                <li>Partnerships</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Advertising</li>
            </ul>
            <ul className='flex flex-col lg:flex-row'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Book</li>
            </ul>  
        </div>    
    </div>
  )
}

export default Footer