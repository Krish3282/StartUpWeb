import React from 'react'
import'./App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComponentLogo from './components/ComponentLogo'
import PurposeSection from './components/PurposeSection'

const App = () => {
  return (
    <>
    <main className='relative min-h-screen overflow-x-hidden'>
    <div className=' absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr
     from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
    <div className='overflow-hidden'>
    <Navbar />
    <Hero />
    <ComponentLogo />
    <PurposeSection />
    </div>
    
    </main>
    </>
  )
}

export default App
