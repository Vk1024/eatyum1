import React from 'react'

const  NewsLetter = () => {
  return (
    <div  className='max-w-[1520px] m-auto px-4 text-white bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1>Need Advice, how to improve your flow</h1>
                <p>SignUp to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" placeholder='Email' className='w-full flex p-3 rounded-md text-black' />
                    <button className='w-[200px] rounded-md bg-[#00df9a] text-white font-medium ml-4 my-6 px-6 py-3 border-none'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
            <hr className=' my-8 border-gray-700 border dark:bg-gray-700 '/>
        </div>
    </div>
  )
}

export default NewsLetter