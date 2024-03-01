import React from 'react'
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";


const About = () => {
  return (
    <div name='book' className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
    <div className='lg:col-span-2 flex flex-col justify-evenly'>
      <div>
        <p className='text-2xl font-bold'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</p>
        <p className='py-4'>
          Come experience the very pinnacle of luxury Caribbean all-inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resorts,
          set along the most gorgeous tropical settings and exquisite beaches
          in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
          Curaçao, feature unlimited gourmet dining, unique bars serving
          premium liquors and wines, and every land and water sport, including
          complimentary green fees at our golf resorts and certified scuba
          diving at most resorts. If you are planning a wedding, BEACHES is
          the leader in Caribbean destination weddings and honeymoon packages.
        </p>
      </div>
      <div className='grid sm:grid-cols-2 gap-8 py-4'>
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <AiOutlineCustomerService size={50} />
          </button>
          <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <button>
            <MdOutlineTravelExplore size={50} />
          </button>
          <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
          </div>
        </div>
      </div>
      </div>
      
      <div className='lg:col-span-1 lg:mt-[-30px]  my-[-60px]'>
        <div className=' text-center shadow bg-gray-100 '>
          <p className='p-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='p-2'>12 HOURS LEFT</p>
          <p className='p-2 text-gray-200 bg-gray-800'>
            BOOK NOW AND SAFE
          </p>
        </div>
        <form className='mt-3'>
          <div className='flex flex-col'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
              <option>Grande Antigua</option>
            </select>
          </div>
          <div className='flex flex-col mt-3'>
            <label>Check-In</label>
            <input type='date' className='border rounded-md py-2'/>
          </div>
          <div className='flex flex-col mt-3'>
            <label>Check-Out</label>
            <input type='date' className='border rounded-md py-2'/>
          </div>
          <div className='flex justify-center mt-3'>
            <button className='p-2'>
              Rates & Availabilities
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default About