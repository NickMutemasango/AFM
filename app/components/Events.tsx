import React from 'react'
import Image from 'next/image'
import Event from '../../public/Images/Events.svg'

const Events = () => {
  return (
    <div className='rounded-lg py-9 xl:py-5 bg-white text-black flex flex-col  justify-center items-center'>
      <h2 className=' text-2xl xl:text-[20px]'>29 Aug</h2>
      <Image src={Event} alt=""  className='py-4'/>
      <h2 className='text-[17px] pb-4'>Sunday Service</h2>
      <p className='pb-2 text-[14px] lg:text-[13px] xl:text-[15px]'>09:00am-1600pm</p>
      <p className=' text-[14px] lg:text-[13px] xl:text-[15px]'>32 teko street Dallas Masvingo</p>
    </div>
  )
}

export default Events
