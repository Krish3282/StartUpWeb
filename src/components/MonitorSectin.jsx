import React from 'react'
import monitor from '../assets/monitor-card.webp'

const MonitorSectin = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
    <div className='flex flex-col md:flex-row  items-center justify-between gap-12 md:gap-24 '>
     
      {/* left section */}
      <div className='md:w-1/2 w-full  -mt-5  md:-mt-40'>
      <p className=' text-blue-500 font-semibold uppercase text-4xl'>Monitor</p>
      <h2 className='text-3xl font-bold md:text-4xl text-neutral-900 mt-6 mb-6'>
       Introducing best mobile <br /> carousele</h2>

        <p className='text-gray-600 mb-8'>
          Take control of your time and boost productivity with our intelligent scheduling system.
           Automate appointments, manage team availablity, and deliver execeptional custom experiences
           through seamless calendar management
        </p>

        <a href="#" className='text-blue-500 font-semibold items-center hover:text-[17px] transition-all  capitalize'>Learn more about monitoring</a>
      </div>

       {/* right section */}
       <div className='md:w-1/2 w-full '>
          <img src={monitor} alt="shedule img"/>
      </div>

    </div>
  </section>
  )
}

export default MonitorSectin
