import React from 'react'
import Image, { StaticImageData } from 'next/image'
import DefaultSermon from '@/public/Images/Sermon1.png'

interface SermonsProps {
  imageSrc?: StaticImageData;
  title: string;
  speaker: string;
  views: string;
  timeAgo: string;
  imageAlt?: string;
}

const Sermons: React.FC<SermonsProps> = ({
  imageSrc = DefaultSermon,
  title,
  speaker,
  views,
  timeAgo,
  imageAlt = "Sermon thumbnail"
}) => {
  return (
    <div className='flex flex-col gap-[6px] shadow-md mb-5'>
      <Image src={imageSrc} alt={imageAlt} />
     <div className='px-3 flex flex-col gap-2 pb-6'>
       <h3 className='text-[#151411] text-[17px] pt-2 font-semibold tracking-tight leading-none font-sans xl:text-[16px]'>{title}</h3>
      <h3 className='text-[#606060] text-[17px] font-semibold  xl:text-[14px]'>{speaker}</h3>
      <p className='text-[#606060] font-semibold text-[17px] xl:text-[14px]'>{views} views   {timeAgo}</p>
     </div>
    </div>
  )
}

export default Sermons