import React from 'react'

const PurposeSection = () => {
    
 const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];


  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8 '>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
            {/* heading text*/}
            <div className=''>
                <p className='text-sm text-purple-600 font-medium'>ACHIEVE MORE</p>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a conovy is to know your team</h2>
            </div>
            {/* bullet point  */}
            <div>
                {features.map((feature,index) =>(
                   <div key={index} className='flex'>
                     
                        <div className='w-12 h-12 flex items-center justify-center rounded-lg'>{feature.icon}</div>  
                     <div >
                        <h2 className='text-xl font-semibold text-gray-900 mb-2'> {feature.title}</h2>
                        <p className=' text-gray-600'>{feature.description}</p>
                     </div>
                   </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default PurposeSection
