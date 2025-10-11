// import Image from "next/image";
// import Text from "./components/Text";
// import Hero from "../public/Images/Home.png";
// import Video from "../public/Images/Video.svg";
// import About from "../public/Images/About.svg";
// import Vision from "../public/Images/Vision.svg";
// import Mission from "../public/Images/Mission.png";
// import Values from "../public/Images/Values.png";
// import Motto from "../public/Images/Moto.png";
// import Events from "./components/Events";
// import HomeBackground from "../public/Images/Help.svg";

// export default function Home() {
//   return (
//     <div>
//       <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
//         <div className=" grid grid-cols-1 px-3 md:px-6 lg:px-0 py-10 lg:py-5 lg:grid-cols-2 gap-7">
//           <div className="flex flex-col gap-4 justify-center ">
//             <Text
//               text="APOSTOLIC FAITH MISSION DALLAS"
//               textClassName="text-[#D4AA49]"
//               lineClassName="bg-[#D4AA49]"
//             />
//             <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//               A vibrant and spirit-filled church community
//             </h2>
//             <p className="text-[#434147]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus, elit massa sed.
//             </p>
//             <div className="flex gap-4">
//               <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 text-[15px]">
//                 Contact Us
//               </button>
//               <button className="border-[2px] border-[#0747A1] text-[15px] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//                 Sermons
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//           </div>
//         </div>

//         {/* Video section */}
//         <div className="py-5 pb-10 md:pb-14 md:py-7 md:pt-16 lg:py-10 xl:py-16 px-3 md:px-6 lg:px-0">
//           <Image src={Video} alt="" />
//         </div>

//         {/* About section */}
//         <div className="py-5 xl:pt-28 flex flex-col gap-6 lg:flex-row lg:justify-center items-center px-3 md:px-6 lg:px-0">
//           <div className="flex flex-col gap-7 lg:gap-5 lg:w-3/4 ">
//             <h2 className="font-semibold text-2xl">About AFM Dallas</h2>
//             <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus, elit massa sed. Lorem ipsum dolor sit amet
//               consectetur adipiscing elit dolor posuere vel venenatis eu sit
//               massa volutpat massa rhoncus.
//             </p>
//             <div className="py-5 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Vision} alt="" />
//                 <h4 className="font-semibold">Our Vision</h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Mission} alt="" />
//                 <h4 className="font-semibold">Our Mission</h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Values} alt="" />
//                 <h4 className="font-semibold">Our Values </h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Motto} alt="" className="xl:w-[12%]" />
//                 <h4 className="font-semibold">Our Motto</h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="py-5 ">
//             <Image src={About} alt="" className="" />
//           </div>
//         </div>

//         {/* Events section */}
//         <div className="flex flex-col gap-5 py-6 px-3 md:py-20 md:px-6 lg:px-0">
//           <h2 className="font-semibold text-2xl">Events</h2>
//           <p className="w-full lg:w-[50%] text-[14px] lg:text-[13px] xl:text-[15px] pb-5">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed.{" "}
//           </p>

//           <div className="bg-[#055594] text-white px-3 py-8   rounded-md">
//             <h2 className="tracking-wider pb-6 text-[20px] md:text-[24px]">
//               Upcoming Events
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-5 pb-2 md:pb-4">
//               <Events />
//               <Events />
//               <Events />
//               <Events />
//             </div>
//             <button className="cursor-pointer">See all events</button>
//           </div>
//         </div>
//       </div>
//       <div className="py-11 xl:pb-28">
//         {/* <Image src={Help} alt="" /> */}
//         <div
//           className="text-white flex flex-col justify-center w-full py-8 md:py-36 xl:py-40 items-center relative"
//           style={{
//             backgroundImage: `url(${HomeBackground.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50"></div>

//           <div className="relative flex flex-col justify-center items-center px-3 z-10">
//             <p className="pb-4  text-[14px] lg:text-[13px] xl:text-[15px]">Support the work of God</p>
//             <h2 className="font-medium text-[20px] md:text-2xl text-center w-[70%] pb-3 md:w-[50%] lg:w-[35%]">
//               Help us Raise In-order to raise those in-need
//             </h2>
//             <p className="text-sm  text-center text-[14px] lg:text-[13px] xl:text-[15px] pb-3 w-full md:w-[50%] lg:w-[35%]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus, elit massa sed.{" "}
//             </p>
//             <button className="bg-[#0747A1] w-[60%] md:w-[30%] py-2 rounded-full">
//               Give now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Text from "./components/Text";
import Hero from "../public/Images/Home.png";
import Video from "../public/Images/Video.svg";
import About from "../public/Images/About.svg";
import Vision from "../public/Images/Vision.svg";
import Mission from "../public/Images/Mission.png";
import Values from "../public/Images/Values.png";
import Motto from "../public/Images/Moto.png";
import Events from "./components/Events";
import HomeBackground from "../public/Images/Help.svg";

// Animation variants for sliding from sides
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  // Refs for each section
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const donationRef = useRef(null);

  // Check if elements are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const videoInView = useInView(videoRef, { once: true, margin: "-50px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-50px" });
  const donationInView = useInView(donationRef, { once: true, margin: "-50px" });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="xl:max-w-5xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 px-3 md:px-6 lg:px-0 py-10 lg:py-5 lg:grid-cols-2 gap-7">
          {/* Left side content - slides from left */}
          <motion.div 
            className="flex flex-col gap-4 justify-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={slideFromLeft}>
              <Text
                text="APOSTOLIC FAITH MISSION DALLAS"
                textClassName="text-[#D4AA49]"
                lineClassName="bg-[#D4AA49]"
              />
            </motion.div>
            
            <motion.h2 
              className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
              variants={slideFromLeft}
              transition={{ delay: 0.1 }}
            >
              A vibrant and spirit-filled church community
            </motion.h2>
            
            <motion.p 
              className="text-[#434147]"
              variants={slideFromLeft}
              transition={{ delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              variants={slideFromLeft}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-[#0747A1] text-white px-6 py-3 rounded-3xl hover:bg-[#063a87] transition-all duration-500 ease-out hover:scale-110 transform text-[15px] shadow-lg hover:shadow-xl relative overflow-hidden group">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              <button className="border-[2px] border-[#0747A1] text-[15px] text-[#0747A1] px-6 py-3 rounded-3xl hover:bg-[#063a87] hover:text-white transition-all duration-500 ease-out hover:scale-110 transform font-medium shadow-lg hover:shadow-xl">
                Sermons
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side image - slides from right */}
          <motion.div 
            className="flex justify-end"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={slideFromRight}
            transition={{ delay: 0.3 }}
          >
            <Image 
              src={Hero} 
              alt="Church community" 
              className="w-[100%] xl:w-[90%] transition-transform duration-700 hover:scale-110 hover:rotate-1 " 
            />
          </motion.div>
        </div>

        {/* Video section - slides from bottom */}
        <motion.div 
          ref={videoRef}
          className="py-5 pb-10 md:pb-14 md:py-7 md:pt-16 lg:py-10 xl:py-16 px-3 md:px-6 lg:px-0"
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
          variants={slideFromBottom}
        >
          <div className="relative group cursor-pointer">
            <Image 
              src={Video} 
              alt="Video presentation" 
              className="transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl transform rounded-xl"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-2xl">
                <div className="w-0 h-0 border-l-[12px] border-l-[#0747A1] border-y-[8px] border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About section */}
        <div ref={aboutRef} className="py-5 xl:pt-28 flex flex-col gap-6 lg:flex-row lg:justify-center items-center px-3 md:px-6 lg:px-0">
          {/* Left side content - slides from left */}
          <motion.div 
            className="flex flex-col gap-7 lg:gap-5 lg:w-3/4"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-semibold text-2xl bg-gradient-to-r from-[#434147] to-[#0747A1] bg-clip-text text-transparent"
              variants={slideFromLeft}
            >
              About AFM Dallas
            </motion.h2>
            
            <motion.p 
              className="text-[14px] lg:text-[13px] xl:text-[15px] leading-relaxed"
              variants={slideFromLeft}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed. Lorem ipsum dolor sit amet
              consectetur adipiscing elit dolor posuere vel venenatis eu sit
              massa volutpat massa rhoncus.
            </motion.p>
            
            <motion.div 
              className="py-5 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4"
              variants={staggerContainer}
            >
              {[
                { src: Vision, title: "Our Vision" },
                { src: Mission, title: "Our Mission" },
                { src: Values, title: "Our Values" },
                { src: Motto, title: "Our Motto" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-200 group cursor-pointer"
                  variants={cardAnimation}
                  custom={index}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0747A1] to-[#D4AA49] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Image 
                      src={item.src} 
                      alt={item.title}
                      className="transition-transform duration-500 group-hover:scale-125" 
                    />
                  </div>
                  <h4 className="font-semibold text-lg group-hover:text-[#0747A1] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[14px] lg:text-[13px] xl:text-[15px] text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                    posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                    feugiat tellus.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right side image - slides from right */}
          <motion.div 
            className="py-5"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={slideFromRight}
            transition={{ delay: 0.3 }}
          >
            <div className="relative group">
              <Image 
                src={About} 
                alt="About our church" 
                className="transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 shadow-xl rounded-2xl" 
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0747A1] to-[#D4AA49] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Events section */}
        <motion.div 
          ref={eventsRef}
          className="flex flex-col gap-5 py-6 px-3 md:py-20 md:px-6 lg:px-0"
          initial="hidden"
          animate={eventsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header slides from left */}
          <motion.div
            variants={slideFromLeft}
          >
            <h2 className="font-semibold text-2xl bg-gradient-to-r from-[#434147] to-[#0747A1] bg-clip-text text-transparent">
              Events
            </h2>
          </motion.div>
          
          {/* Description slides from left */}
          <motion.p 
            className="w-full lg:w-[50%] text-[14px] lg:text-[13px] xl:text-[15px] pb-5 leading-relaxed"
            variants={slideFromLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </motion.p>

          {/* Events container slides from right */}
          <motion.div 
            className="bg-gradient-to-br from-[#055594] via-[#0747A1] to-[#063a87] text-white px-6 py-10 rounded-2xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] group"
            variants={slideFromRight}
          >
            <h2 className="tracking-wider pb-6 text-[20px] md:text-[24px] font-light">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-6 pb-4">
              <Events />
              <Events />
              <Events />
              <Events />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Donation Section */}
      <motion.div 
        ref={donationRef}
        className="py-11 xl:pb-28"
        initial="hidden"
        animate={donationInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div
          className="text-white flex flex-col justify-center w-full py-16 md:py-36 xl:py-40 items-center relative"
          style={{
            backgroundImage: `url(${HomeBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#0747A1]/40 to-black/60 transition-all duration-700 group-hover:from-black/70 group-hover:via-[#0747A1]/50 group-hover:to-black/70"></div>

          <motion.div 
            className="relative flex flex-col justify-center items-center px-3 z-10 space-y-6"
            variants={staggerContainer}
          >
            {/* Text elements slide from left */}
            <motion.p 
              className="pb-2 text-[14px] lg:text-[13px] xl:text-[15px] tracking-widest uppercase opacity-90"
              variants={slideFromLeft}
            >
              Support the work of God
            </motion.p>
            
            <motion.h2 
              className="font-medium text-[24px] md:text-3xl text-center w-[90%] md:w-[60%] lg:w-[40%] leading-tight"
              variants={slideFromLeft}
            >
              Help us Raise In-order to raise those in-need
            </motion.h2>
            
            <motion.p 
              className="text-sm text-center text-[14px] lg:text-[13px] xl:text-[15px] pb-2 w-full md:w-[60%] lg:w-[40%] opacity-90 leading-relaxed"
              variants={slideFromLeft}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed.
            </motion.p>
            
            {/* Button slides from right */}
            <motion.button 
              className="bg-gradient-to-r from-[#0747A1] to-[#D4AA49] w-[60%] md:w-[25%] py-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl transform font-medium relative overflow-hidden group"
              variants={slideFromRight}
            >
              <span className="relative z-10">Give now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AA49] to-[#0747A1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}