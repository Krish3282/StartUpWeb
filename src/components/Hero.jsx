import React from 'react'
import hero_img from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section id='home' className=' container mx-auto flex flex-col md:flex-row justify-between items-center pt-24 px-4 pb-6 sm:px-6 lg:px-8'>
      {/* left column */}
      <div className='w-full md:w-1/2 space-y-8'>
      {/* star badge */}
      <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
        <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110'>★</span>
        <span className='text-sm font-medium'>Jump start your growth</span>
      </div>
      {/* h1 tag */}
      <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          We boost the growth for
          <span className="text-blue-600 ">
            {' '}Startup to Fortune 500
          </span>
          
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </h1>
      <p className='text-gray-600 text-lg md:text-xl max-w-xl'>Got the most accurate leads. sales people training and conversion, tools and more-all the same one billing </p>
      <div className='flex gap-3 max-w-md'>
        <input type="email" placeholder='Enter your mail'
         className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'/>
        <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer translate-all hover:shadow-lg hover:shadow-blue-300'>Go</button>
      </div>
      </div>


      {/* right column */}
      <div className='w-full md:w-1/2  mt-16 md:mt-0 pl-0 md:pl-1'>
      <div className='realtive'>
        <img src={hero_img} alt="main image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
      </div>
      </div>
    </section>
  )
}

export default Hero
