import React, { useState, useEffect } from 'react'
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {FaBars , FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile (window.innerWidth <= 768);
        }

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    })

    function handleToggle() {
        setToggle(!toggle);
    }

    // function handleOverlayClick() {
    //     setToggle(false);
    //   }

  return (
    <div className='h-[80px] w-full flex justify-between items-center absolute z-10'>
        <div className='text-2xl ml-2'>
            <h1 className='text-white'>BEACHES.</h1>
        </div>

        {/* menu */}
        <ul className='hidden md:flex text-lg text-white cursor-pointer'>
            <li>
                <Link 
                    to='hero'
                    smooth={true}
                    duration={500}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='destinations'
                    smooth={true}
                    duration = {500}
                >
                    Destinations
                </Link>
            </li>
            <li>
                <Link
                    to='travel'
                    smooth={true}
                    duration={500}
                >
                    Travel
                </Link>
            </li>
            <li>
                <Link
                    to='views'
                    smooth={true}
                    duration={500}
                >
                    Views
                </Link>
            </li>
            <li>
            <Link
                    to='book'
                    smooth={true}
                    duration={500}
                >
                    Book
            </Link>
            </li>
        </ul>

        {/* hamburger menu */}
        <div className='md:hidden z-10' onClick={handleToggle}>
            {!toggle ? <FaBars className='text-white' /> : <FaTimes className='text-white'/>}
        </div>

        {/* mobile menu */}
        {isMobile &&
             <div
             className={!toggle ? 'hidden' : 'absolute top-0 bg-blue-300 left-0 w-full h-screen flex flex-col justify-center items-center'}>
             <ul className='text-black text-xl text-center cursor-pointer'>
               <li>
                <Link
                        onClick={handleToggle}
                        to='hero'
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
               </li>
               <li>
                <Link
                        onClick={handleToggle}
                        to='destinations'
                        smooth={true}
                        duration={500}
                    >
                        Destinations
                    </Link>
               </li>
               <li>
                <Link
                        onClick={handleToggle}
                        to='travel'
                        smooth={true}
                        duration={500}
                    >
                        Travel
                    </Link>
               </li>
               <li>
                <Link
                        onClick={handleToggle}
                        to='views'
                        smooth={true}
                        duration={500}
                    >
                        Views
                    </Link>
               </li>
               <li>
                <Link
                        onClick={handleToggle}
                        to='book'
                        smooth={true}
                        duration={500}
                    >
                        Book
                    </Link>
               </li>
               <div className='h-[50px] w-full flex justify-center mt-4'>
                 <button className='px-6 text-xl mr-4'>Search</button>
                 <button className='px-6 text-xl'>Account</button>
               </div>
             </ul>
           </div>
        }

        <div className='hidden md:flex gap-4 px-4'>
            <BiSearch size={20} color='white' />
            <BsPerson size={20} color='white' />
        </div>
    </div>
  )
}

export default Navbar