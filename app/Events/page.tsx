"use client";

import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "@/public/Images/Sermon.png";
import Search from "../components/Search";
import UpcomingEvents from "../components/UpcomingEvents";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Event1 from "@/public/Images/Event1.png";
import Event2 from "@/public/Images/Event2.png";
import Event3 from "@/public/Images/Event3.png";
import Event4 from "@/public/Images/Event4.png";
import Event5 from "@/public/Images/Event5.png";
import Event6 from "@/public/Images/Event6.png";
import Event7 from "@/public/Images/Event7.png";
import Event8 from "@/public/Images/Event8.png";
import Event9 from "@/public/Images/Event9.png";

// Animation variants for sliding from sides
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const page = () => {
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
  const donationInView = useInView(donationRef, {
    once: true,
    margin: "-50px",
  });

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
              text="EVENTS THAT MOVE THE HEART"
              textClassName="text-[#0747A1]"
              lineClassName="bg-[#0747A1]"
            />
          </motion.div>
          <motion.h2
            variants={slideFromLeft}
            transition={{ delay: 0.1 }}
            className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
          >
            Connect. Celebrate. Live Your Faith.
          </motion.h2>
          <motion.p
            variants={slideFromLeft}
            transition={{ delay: 0.2 }}
            className="text-[14px] lg:text-[13px] xl:text-[15px]"
          >
            Step into moments that matter — where faith comes alive through
            community, worship, and action. Our events are more than dates on a
            calendar; they’re opportunities to grow, serve, and be transformed
            together.
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
        <Search heading="Upcoming Events" />
      </div>

      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event1} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event2} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event3} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event4} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event5} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event6} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event7} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event8} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.9 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <UpcomingEvents imageSrc={Event9} />
  </motion.div>
</div>
     
    </div>
  );
};

export default page;

// "use client";

// import React from "react";
// import Text from "../components/Text";
// import Image from "next/image";
// import Hero from "@/public/Images/Sermon.png";
// import Search from "../components/Search";
// import UpcomingEvents from "../components/UpcomingEvents";
// import Event1 from "@/public/Images/Event1.png";
// import Event2 from "@/public/Images/Event2.png";
// import Event3 from "@/public/Images/Event3.png";
// import Event4 from "@/public/Images/Event4.png";
// import Event5 from "@/public/Images/Event5.png";
// import Event6 from "@/public/Images/Event6.png";
// import Event7 from "@/public/Images/Event7.png";
// import Event8 from "@/public/Images/Event8.png";
// import Event9 from "@/public/Images/Event9.png";
// import Link from "next/link";
// import { motion, type Variants, MotionConfig } from "framer-motion";

// const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       delayChildren: 0.25,
//       staggerChildren: 0.16,
//     },
//   },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.0, ease: EASE_OUT_EXPO },
//   },
// };

// const fadeLeft: Variants = {
//   hidden: { opacity: 0, x: -24 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.1, ease: EASE_OUT_EXPO },
//   },
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
// };

// const Page = () => {
//   return (
//     <MotionConfig transition={{ duration: 0.9, ease: "easeOut" }}>
//       {/* No initial/whileInView/viewport so content is visible immediately */}
//       <motion.div className="xl:max-w-5xl lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto">
//         <div className="grid grid-cols-1 py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
//           {/* Variants remain attached but no enter animation will run without animate/whileInView */}
//           <motion.div className="flex flex-col gap-4 justify-center">
//             <Text
//               text="EVENTS THAT MOVE THE HEART"
//               textClassName="text-[#0747A1]"
//               lineClassName="bg-[#0747A1]"
//             />
//             <motion.h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//               Connect. Celebrate. Live Your Faith.
//             </motion.h2>
//             <motion.p className="text[14px] lg:text-[13px] xl:text-[15px]">
//               Step into moments that matter — where faith comes alive through
//               community, worship, and action. Our events are more than dates on
//               a calendar; they’re opportunities to grow, serve, and be
//               transformed together.
//             </motion.p>
//             <motion.div>
//               <Link href="/Contact">
//                 <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl transition-colors duration-300 ease-out hover:bg-[#063a87] transform will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0747A1]/50">
//                   Contact Us
//                 </button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           <motion.div className="flex justify-end">
//             <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//           </motion.div>
//         </div>

//         {/* Search stays static on mount */}
//         <motion.div className="py-5">
//           <Search heading="Upcoming Events" />
//         </motion.div>

//         {/* Cards grid: only hover animation */}
//         <motion.div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event1} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event2} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event3} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event4} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event5} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event6} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event7} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event8} />
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -4 }}
//             transition={{ type: "spring", stiffness: 140, damping: 24 }}
//             className="will-change-transform"
//           >
//             <UpcomingEvents imageSrc={Event9} />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </MotionConfig>
//   );
// };

// export default Page;
