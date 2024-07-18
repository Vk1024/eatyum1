import React from 'react'
import img4 from '../resources/fast-food-app.jpg'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src={img4} />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
          <p className='font-medium'>What’s your food mood today? Delicious biryani or crispy dosas, pizza or burgers, Indian sweets or cakes, chai or coffee? Whatever you feel like eating, YumEats is the only app you need for the quickest doorstep delivery or to find the best restaurants. With over 3 lakh listed restaurants, explore the best food around you with India’s most loved</p>

          <button className='bg-black text-[#00df9a] w-[200px] hover:bg-green-500 hover:text-black rounded-md font-medium my-6 mx-auto md-mx-0 py-3'>Get Start</button>



        </div>
      </div>
    </div>
  )
}

export default Delivery