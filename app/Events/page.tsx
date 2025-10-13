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

// const page = () => {
//   return (
//     <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto">
//       <div className=" grid grid-cols-1  py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
//         <div className="flex flex-col gap-4 justify-center ">
//           <Text
//             text="EVENTS THAT MOVE THE HEART"
//             textClassName="text-[#0747A1]"
//             lineClassName="bg-[#0747A1]"
//           />
//           <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//             Connect. Celebrate. Live Your Faith.
//           </h2>
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//             Step into moments that matter — where faith comes alive through
//             community, worship, and action. Our events are more than dates on a
//             calendar; they’re opportunities to grow, serve, and be transformed
//             together.
//           </p>
//           <div>
//             <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Contact Us
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//         </div>
//       </div>

//       <div className="py-5">
//         <Search heading="Upcoming Events" />
//       </div>

//       <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
//         <UpcomingEvents imageSrc={Event1} />
//         <UpcomingEvents imageSrc={Event2} />
//         <UpcomingEvents imageSrc={Event3} />
//         <UpcomingEvents imageSrc={Event4} />
//         <UpcomingEvents imageSrc={Event5} />
//         <UpcomingEvents imageSrc={Event6} />
//         <UpcomingEvents imageSrc={Event7} />
//         <UpcomingEvents imageSrc={Event8} />
//         <UpcomingEvents imageSrc={Event9} />
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "@/public/Images/Sermon.png";
import Search from "../components/Search";
import UpcomingEvents from "../components/UpcomingEvents";
import Event1 from "@/public/Images/Event1.png";
import Event2 from "@/public/Images/Event2.png";
import Event3 from "@/public/Images/Event3.png";
import Event4 from "@/public/Images/Event4.png";
import Event5 from "@/public/Images/Event5.png";
import Event6 from "@/public/Images/Event6.png";
import Event7 from "@/public/Images/Event7.png";
import Event8 from "@/public/Images/Event8.png";
import Event9 from "@/public/Images/Event9.png";
import Link from "next/link";
import { motion, type Variants, MotionConfig } from "framer-motion";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// Slower, more paced orchestration at the parent level
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.25, // add initial pause before children start
      staggerChildren: 0.16, // increase spacing between children
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_OUT_EXPO }, // slower
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EASE_OUT_EXPO }, // slower
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } }, // slower
};

const Page = () => {
  return (
    // Optional: global defaults to slow everything
    <MotionConfig transition={{ duration: 0.9, ease: "easeOut" }}>
      <motion.div
        className="xl:max-w-5xl lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
          <motion.div
            className="flex flex-col gap-4 justify-center"
            variants={fadeLeft}
          >
            <Text
              text="EVENTS THAT MOVE THE HEART"
              textClassName="text-[#0747A1]"
              lineClassName="bg-[#0747A1]"
            />
            <motion.h2
              className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
              variants={fadeUp}
            >
              Connect. Celebrate. Live Your Faith.
            </motion.h2>
            <motion.p
              className="text-[14px] lg:text-[13px] xl:text-[15px]"
              variants={fadeUp}
            >
              Step into moments that matter — where faith comes alive through
              community, worship, and action. Our events are more than dates on
              a calendar; they’re opportunities to grow, serve, and be
              transformed together.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/Contact">
                {" "}
                <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl transition-colors duration-300 ease-out hover:bg-[#063a87] transform will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0747A1]/50">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-end" variants={fadeIn}>
            <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
          </motion.div>
        </div>

        <motion.div
          className="py-5"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Search heading="Upcoming Events" />
        </motion.div>

        <motion.div
          className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Softer, slower hover spring */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event1} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event2} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event3} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event4} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event5} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event6} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event7} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event8} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="will-change-transform"
          >
            <UpcomingEvents imageSrc={Event9} />
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default Page;
