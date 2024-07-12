import React from 'react'
import { mealData } from './data/apidata'

const Meals = () => {
  return (
    <div className='w-[1520] m-auto px-4 py-12'>
         <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Meals</h1>
         <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                mealData.map((item)=>(
                    <div className='border-none hover:scale-105 duration-300'>
                        <img src={item.imageUrl} alt={item.title} className='w-full h-[200px] object-cover rounded-lg'/>
                        <div className='flex justify-center px-4 py-2'>
                            <p className='font-bold'>{item.title}</p>
                           <p className='bg-orange-700 h-18 w-18 rounded-full -mt-12 -ml-54 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                        </div>
                    </div>
                ))
            }
         </div>
    </div>
  )
}

export default Meals