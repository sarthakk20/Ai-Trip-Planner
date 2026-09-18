import { Mountain, Parasol, Plane } from 'lucide-react'
import React from 'react'

const EmptyBoxState = ({onSelectOption}:any) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-9'>Start planning your <strong className='text-orange-400'>Trip</strong> with AI</h1>
        <p className='text-sm md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-400'>Ask any questions or share your ideas to plan your perfect trip!</p>

    <div  className='flex flex-col w-[80%]'>
                <ul className=' gap-8 text-sm sm:text-md md:text-lg py-7'>
                    <li onClick={()=>{onSelectOption('Create a new trip') }} className='flex items-center justify-center border border-gray-400 rounded-full p-2 m-5 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Plane size={20} className='h-2 w-2 md:h-5 md:w-5 text-blue-500'></Plane></span>Create a new trip.</li>
                    <li onClick={()=>{onSelectOption('Plan Paris to London 4 days trip') }} className='flex items-center justify-center border border-gray-400 rounded-full p-2 m-5 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Plane size={20} className='h-2 w-2 md:h-5 md:w-5 text-blue-500'></Plane></span>Plan Paris to London 4 days trip.</li>
                    <li onClick={()=>{onSelectOption('Create iternary for 7 days goa trip') }} className='flex items-center justify-center border border-gray-400 rounded-full p-2 m-5 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Parasol size={20} className='h-2 w-2 md:h-5 md:w-5 text-yellow-300'></Parasol></span>Create iternary for 7 days goa trip.</li>
                    <li onClick={()=>{onSelectOption('Discover Hidden Gems') }} className='flex items-center justify-center border border-gray-400 rounded-full p-2 m-5 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Mountain size={20} className='h-2 w-2 md:h-5 md:w-5 text-green-500'></Mountain></span>Discover Hidden Gems</li>
                </ul>
    </div>
    </div>
    </>
  )
}

export default EmptyBoxState