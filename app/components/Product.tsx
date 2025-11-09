// import React from 'react'
// import Image from 'next/image'
// import Category from '../../public/Images/Product.png'

// const Product = () => {
//   return (
//     <div className='flex flex-col gap-1'>
//       <Image src={Category} alt="" />
//       <p className='text-[#AFADB5]'>Diary</p>
//       <h2 className='text-[20px] font-semibold font-sans '>Multi Colored Diary</h2>
//       <p className='text-[#AFADB5]'>Combination of wood and plastic</p>
//       <p className='font-semibold font-sans text-[20px]'>$63.47</p>
//     </div>
//   )
// }

// export default Product
import React from 'react'
import Image from 'next/image'
import { useTheme } from "../contexts/ThemeContext";

interface ProductProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  price: string;
  imageAlt?: string;
}

const Product: React.FC<ProductProps> = ({
  imageSrc,
  category,
  title,
  description,
  price,
  imageAlt = "Product image"
}) => {

    const { isDarkMode } = useTheme(); // Get the theme state

  return (
    <div className={`flex flex-col gap-1 ${isDarkMode ? 'dark:bg-gray-800 ' : ''}`}>
      <Image 
        src={imageSrc} 
        alt={imageAlt} 
        width={300}
        height={200}
        className="w-full h-auto"
      />
      <div className={`${isDarkMode ? 'dark:pl-3 ' : ''}`}>
        <p className='text-[#AFADB5] pt-3  text-[14px] lg:text-[13px] xl:text-[15px]'>{category}</p>
      <h2 className='text-[20px] font-semibold font-sans'>{title}</h2>
      <p className='text-[#AFADB5]  text-[14px] lg:text-[13px] xl:text-[15px]'>{description}</p>
      <p className='font-semibold  font-sans text-[20px] pb-3'>{price}</p>
      </div>
    </div>
  )
}

export default Product