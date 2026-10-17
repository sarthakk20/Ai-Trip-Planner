import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Pricing = () => {
  return (
    <div className='flex justify-center items-center w-full h-full min-h-[90vh]'>
       <div className='md:w-[20%] w-30% max-w-2xl'>
        <PricingTable/>
       </div>
    </div>
  )
}

export default Pricing