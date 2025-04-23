import React, { useState } from 'react'

const PricingSection = () => {
    const [productCount,setProductCount] = useState(1);
    // calcluate product proce
    const stater  = Math.floor(4000 * (productCount / 50));
    const pro  = Math.floor(7500 * (productCount / 50));
   

  return (
   <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
            <h2> the product {productCount}</h2>
        </div>
   </section>
  )
}

export default PricingSection
