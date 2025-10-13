// import React from "react";
// import Text from "../components/Text";
// import Image from "next/image";
// import Hero from "../../public/Images/About.png";
// import About from "../../public/Images/About AFM.svg";
// import Vision from "../../public/Images/Vision.svg";
// import Ab1 from "../../public/Images/Ab1.svg";
// import Ab2 from "../../public/Images/Ab2.png";
// import Ab3 from "../../public/Images/Ab3.svg";
// import Mission from "../../public/Images/Mission.png"
// import Motto from "../../public/Images/Moto.png";
// import Values from "../../public/Images/Values.png";

// const page = () => {
//   return (
//     <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto">
//       <div className=" grid grid-cols-1  py-10 lg:py-5 lg:grid-cols-2 gap-7">
//         <div className="flex flex-col gap-4 justify-center ">
//           <Text
//             text="WHAT WE BELIEVE AND WHO WE ARE"
//             textClassName="text-[#C83E30]"
//             lineClassName="bg-[#C83E30]"
//           />
//           <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//             Together in faith, moving forward with purpose
//           </h2>
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed.
//           </p>
//           <div>
//             <button className="border border-[#0747A1] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] hover:text-white transition-colors duration-200 font-medium">
//               Sermons
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//         </div>
//       </div>

//       {/* About */}
//       <div className=" py-5 lg:py-16 flex flex-col gap-7 lg:flex-row lg:items-center">
//         <div className="flex flex-col gap-3 pb-3">
//           <h2 className="font-semibold text-2xl pb-3">About AFM Dallas</h2>
//           <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed. Lorem ipsum dolor sit amet consectetur
//             adipiscing elit dolor posuere vel venenatis eu sit massa volutpat
//             massa rhoncus.
//           </p>
//           <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed. Lorem ipsum dolor{" "}
//           </p>
//           <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed.
//           </p>
//           <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed. Lorem ipsum dolor sit amet consectetur
//             adipiscing elit dolor posuere vel venenatis eu s
//           </p>
//         </div>
//         <Image src={About} alt="" className="w-full lg:w-[40%] xl:w-[43%]" />
//       </div>

//       <div className=" py-10 flex flex-col-reverse  gap-7 xl:gap-16 lg:flex-row">
//         <div className="flex flex-col gap-3">
//           <Image src={Ab1} alt="" className="w-full" />
//           <Image src={Ab2} alt="" className="w-full -mt-[20%]" />
//           <Image src={Ab3} alt="" className="w-full" />
//         </div>
//         <div className="flex flex-col lg:w-[60%]">
//           <div className="flex flex-col gap-3 py-3 ">
//             <Image src={Mission} alt="" />
//             <h4 className="font-semibold">Our Mission</h4>
//             <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus.
//             </p>
//           </div>
//           <div className="flex flex-col gap-3 py-3 ">
//             <Image src={Vision} alt="" />
//             <h4 className="font-semibold">Our Vision</h4>
//             <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus.
//             </p>
//           </div>
//           <div className="flex flex-col gap-3 py-3 ">
//             <Image src={Motto} alt="" />
//             <h4 className="font-semibold">Our Motto</h4>
//             <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus.
//             </p>
//           </div>
//           <div className="flex flex-col gap-3 py-3 ">
//             <Image src={Values} alt="" />
//             <h4 className="font-semibold">Our Values</h4>
//             <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "../../public/Images/About.png";
import About from "../../public/Images/About AFM.svg";
import Vision from "../../public/Images/Vision.svg";
import Ab1 from "../../public/Images/Ab1.svg";
import Ab2 from "../../public/Images/Ab2.png";
import Ab3 from "../../public/Images/Ab3.svg";
import Mission from "../../public/Images/Mission.png"
import Motto from "../../public/Images/Moto.png";
import Values from "../../public/Images/Values.png";
import Link from "next/link";

// Smooth animation variants
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Page = () => {
  // Refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  // Check if elements are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-30px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-30px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-30px" });

  return (
    <div className="xl:max-w-5xl lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto">
      {/* Hero Section */}
      <div ref={heroRef} className="grid grid-cols-1 py-10 lg:py-5 lg:grid-cols-2 gap-7">
        {/* Left content - slides from left */}
        <motion.div 
          className="flex flex-col gap-4 justify-center"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={slideFromLeft}>
            <Text
              text="WHAT WE BELIEVE AND WHO WE ARE"
              textClassName="text-[#C83E30]"
              lineClassName="bg-[#C83E30]"
            />
          </motion.div>
          
          <motion.h2 
            className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
            variants={slideFromLeft}
          >
            Together in faith, moving forward with purpose
          </motion.h2>
          
          <motion.p 
            className="text-[14px] lg:text-[13px] xl:text-[15px]"
            variants={slideFromLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </motion.p>
          
          <motion.div variants={slideFromLeft}>
           <Link href="/ Sermons">
            <button className="border cursor-pointer border-[#0747A1] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] hover:text-white transition-all duration-300 ease-out hover:scale-105 transform font-medium">
              Sermons
            </button>
           </Link>
          </motion.div>
        </motion.div>
        
        {/* Right image - slides from right */}
        <motion.div 
          className="flex justify-end"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={slideFromRight}
        >
          <Image 
            src={Hero} 
            alt="" 
            className="w-[100%] xl:w-[90%] transition-transform duration-700 hover:scale-105" 
          />
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div 
        ref={aboutRef}
        className="py-5 lg:py-16 flex flex-col gap-7 xl:gap-5 lg:flex-row lg:items-center"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Left content - slides from left */}
        <motion.div 
          className="flex lg:w-[70%] flex-col gap-3 pb-3"
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-semibold text-2xl pb-3"
            variants={slideFromLeft}
          >
            About AFM Dallas
          </motion.h2>
          
          <motion.p 
            className="text-[14px] lg:text-[13px] xl:text-[16px]"
            variants={slideFromLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed. Lorem ipsum dolor sit amet consectetur
            adipiscing elit dolor posuere vel venenatis eu sit massa volutpat
            massa rhoncus.
          </motion.p>
          
          <motion.p 
            className="text-[14px] lg:text-[13px] xl:text-[16px]"
            variants={slideFromLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed. Lorem ipsum dolor{" "}
          </motion.p>
          
          <motion.p 
            className="text-[14px] lg:text-[13px] xl:text-[16px]"
            variants={slideFromLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </motion.p>
          
          <motion.p 
            className="text-[14px] lg:text-[13px] xl:text-[16px]"
            variants={slideFromLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed. Lorem ipsum dolor sit amet consectetur
            adipiscing elit dolor posuere vel venenatis eu s
          </motion.p>
        </motion.div>
        
        {/* Right image - slides from right */}
        <motion.div
          variants={slideFromRight}
          className="flex justify-end"
        >
          <Image 
            src={About} 
            alt="" 
            className="w-full lg:w-[100%] xl:w-[100%] transition-transform duration-700 hover:scale-105" 
          />
        </motion.div>
      </motion.div>

      {/* Mission & Values Section */}
      <motion.div 
        ref={missionRef}
        className="py-10 flex flex-col-reverse gap-7 xl:gap-16 lg:flex-row"
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Left images - slides from left with staggered children */}
        <motion.div 
          className="flex flex-col gap-3"
          variants={staggerContainer}
        >
          <motion.div variants={slideFromLeft}>
            <Image 
              src={Ab1} 
              alt="" 
              className="w-full transition-transform duration-700 hover:scale-105" 
            />
          </motion.div>
          
          <motion.div variants={slideFromLeft}>
            <Image 
              src={Ab2} 
              alt="" 
              className="w-full -mt-[20%] transition-transform duration-700 hover:scale-105" 
            />
          </motion.div>
          
          <motion.div variants={slideFromLeft}>
            <Image 
              src={Ab3} 
              alt="" 
              className="w-full transition-transform duration-700 hover:scale-105" 
            />
          </motion.div>
        </motion.div>
        
        {/* Right content - slides from right with staggered children */}
        <motion.div 
          className="flex flex-col lg:w-[60%]"
          variants={staggerContainer}
        >
          {[
            { src: Mission, title: "Our Mission" },
            { src: Vision, title: "Our Vision" },
            { src: Motto, title: "Our Motto" },
            { src: Values, title: "Our Values" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col gap-3 py-3 transition-all duration-500 hover:scale-105 hover:bg-gray-50 rounded-lg p-4"
              variants={cardAnimation}
            >
              <Image 
                src={item.src} 
                alt="" 
                className="transition-transform duration-500 hover:scale-110" 
              />
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                feugiat tellus.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;