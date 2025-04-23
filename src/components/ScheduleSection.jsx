import React from 'react'
import start_img from '../assets/stats.webp'

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-2'>
      <div className='flex flex-col md:flex-row  items-center justify-between gap-12 md:gap-24'> 
        {/* left section */}
        <div className='md:w-1/2 w-full'>
            <img src={start_img} alt="shedule img"/>
        </div>

        {/* right section */}

        <div className='md:w-1/2 w-full'>
        <p className=' text-orange-500 font-semibold uppercase text-4xl'>Schedule</p>
        <h2 className='text-3xl font-bold md:text-4xl text-neutral-900 mt-4 mb-6'>
          Streamless your business <br /> with samrt scheduling solution</h2>

          <p className='text-gray-600 mb-8'>
            Take control of your time and boost productivity with our intelligent scheduling system.
             Automate appointments, manage team availablity, and deliver execeptional custom experiences
             through seamless calendar management
          </p>

          <a href="#" className='text-blue-500 font-semibold items-center hover:text-[17px] transition-all '>Explore scheduling features </a>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
