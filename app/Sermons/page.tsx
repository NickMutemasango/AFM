"use client";

import React from "react";
import Image from "next/image";
import Text from "../components/Text";
import Search from "../components/Search";
import Hero from "@/public/Images/Give.png";
import Sermons from "../components/Sermons";
import Sermon1 from "@/public/Images/Sermon1.png";
import Sermon2 from "@/public/Images/Sermon2.png";
import Sermon3 from "@/public/Images/Sermon3.png";
import Sermon4 from "@/public/Images/Sermon4.png";
import Sermon5 from "@/public/Images/Sermon5.png";
import Sermon6 from "@/public/Images/Sermon6.png";
import Sermon7 from "@/public/Images/Sermon7.png";
import Sermon8 from "@/public/Images/Sermon8.png";
import Sermon9 from "@/public/Images/Sermon9.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { staggerContainer, slideFromLeft, slideFromRight } from "@/variants";

const Page = () => {
  const heroRef = useRef(null);

  // Check if elements are in view - only keeping the ones you actually use
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={heroRef}
      className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto"
    >
      <div className=" grid grid-cols-1  py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-4 justify-center "
        >
          <motion.div variants={slideFromLeft}>
            <Text
              text="SERMONS THAT SPEAK TO THE SOUL"
              textClassName="text-[#0747A1]"
              lineClassName="bg-[#0747A1]"
            />
          </motion.div>
          <motion.h2
            variants={slideFromLeft}
            transition={{ delay: 0.1 }}
            className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
          >
            Truth. Hope. Transformation.
          </motion.h2>
          <motion.p
            variants={slideFromLeft}
            transition={{ delay: 0.2 }}
            className="text-[14px] lg:text-[13px] xl:text-[15px]"
          >
            Dive into powerful messages rooted in faith and designed to uplift,
            challenge, and guide you in your spiritual journey. Whether you’re
            listening for the first time or returning for encouragement, each
            sermon is a step closer to understanding God’s word and His purpose
            for your life.
          </motion.p>
          <motion.div variants={slideFromLeft} transition={{ delay: 0.3 }}>
            <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={slideFromRight}
          transition={{ delay: 0.3 }}
          className="flex justify-end"
        >
          <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
        </motion.div>
      </div>

      <div className="py-5">
        <Search heading="Sermons" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pb-28 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon1}
            title="Evangelist Trymore Muparinga : Double portion"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon2}
            title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon3}
            title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon4}
            title="Evangelist Trymore Muparinga : Double portion"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon5}
            title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon6}
            title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon7}
            title="Evangelist Trymore Muparinga : Double portion"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon8}
            title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Sermons
            imageSrc={Sermon9}
            title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings"
            speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
            views="27K"
            timeAgo="1 months ago"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

// "use client";

// import React from "react";
// import Image from "next/image";
// import Text from "../components/Text";
// import Search from "../components/Search";
// import Hero from "@/public/Images/Give.png";
// import Sermons from "../components/Sermons";
// import Sermon1 from "@/public/Images/Sermon1.png";
// import Sermon2 from "@/public/Images/Sermon2.png";
// import Sermon3 from "@/public/Images/Sermon3.png";
// import Sermon4 from "@/public/Images/Sermon4.png";
// import Sermon5 from "@/public/Images/Sermon5.png";
// import Sermon6 from "@/public/Images/Sermon6.png";
// import Sermon7 from "@/public/Images/Sermon7.png";
// import Sermon8 from "@/public/Images/Sermon8.png";
// import Sermon9 from "@/public/Images/Sermon9.png";
// import Link from "next/link";
// import { motion, type Variants, MotionConfig } from "framer-motion";

// // Type-safe cubic-bezier for Transition.ease
// const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// // Parent container with slower orchestration
// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       delayChildren: 0.25,
//       staggerChildren: 0.16
//     }
//   }
// };

// // Reuse core reveals (same feel as Events page)
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.0, ease: EASE_OUT_EXPO }
//   }
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } }
// };

// // Slightly different hero/text entrance for this page (from right)
// const fadeRight: Variants = {
//   hidden: { opacity: 0, x: 24 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.1, ease: EASE_OUT_EXPO }
//   }
// };

// // Distinct reveal for sermon cards
// const scaleIn: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.95, ease: EASE_OUT_EXPO }
//   }
// };

// const Page = () => {
//   return (
//     // Global default transition to keep pacing consistent
//     <MotionConfig transition={{ duration: 0.9, ease: "easeOut" }}>
//       <motion.div
//         className="xl:max-w-5xl lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="grid grid-cols-1 py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
//           <motion.div className="flex flex-col gap-4 justify-center" variants={fadeRight}>
//             <Text
//               text="SERMONS THAT SPEAK TO THE SOUL"
//               textClassName="text-[#0747A1]"
//               lineClassName="bg-[#0747A1]"
//             />
//             <motion.h2
//               className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
//               variants={fadeUp}
//             >
//               Truth. Hope. Transformation.
//             </motion.h2>
//             <motion.p
//               className="text-[14px] lg:text-[13px] xl:text-[15px]"
//               variants={fadeUp}
//             >
//               Dive into powerful messages rooted in faith and designed to uplift, challenge, and guide you in your spiritual journey. Whether listening for the first time or returning for encouragement, each sermon is a step closer to understanding God’s word and His purpose.
//             </motion.p>
//             <motion.div variants={fadeUp}>
//               <Link href="/Contact">
//                 {" "}
//                 <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl transition-colors duration-300 ease-out hover:bg-[#063a87] transform will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0747A1]/50">
//                   Contact Us
//                 </button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           <motion.div className="flex justify-end" variants={fadeIn}>
//             <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//           </motion.div>
//         </div>

//         <motion.div className="py-5" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
//           <Search heading="Sermons" />
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pb-28 gap-4"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//         >
//           {/* Distinct scale-in reveal on cards with soft hover lift */}
//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon1} title="Evangelist Trymore Muparinga : Double portion" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon2} title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon3} title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon4} title="Evangelist Trymore Muparinga : Double portion" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon5} title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon6} title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon7} title="Evangelist Trymore Muparinga : Double portion" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon8} title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>

//           <motion.div variants={scaleIn} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 140, damping: 24 }}>
//             <Sermons imageSrc={Sermon9} title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings" speaker="AFM FOUNTAIN OF GRACE ASSEMBLY" views="27K" timeAgo="1 months ago" />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </MotionConfig>
//   );
// };

// export default Page;
