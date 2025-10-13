// import React from "react";
// import Text from "../components/Text";
// import Image from "next/image";
// import Hero from "@/public/Images/Shop.png";
// import PersonalInfo from "../components/PersonalInfo";
// import FormSubmission from "../components/FormSubmission";

// const page = () => {
//   return (
//     <div className="xl:max-w-5xl px-3 md:px-6 lg:px-0  lg:max-w-4xl  mx-auto flex flex-col items-center">
//       <div className=" grid grid-cols-1  py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
//         <div className="flex flex-col gap-4 justify-center ">
//           <Text
//             text="Giving Is Sowing into God's Kingdom"
//             textClassName="text-[#0747A1]"
//             lineClassName="bg-[#0747A1]"
//           />
//           <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//             A vibrant and spirit-filled church community
//           </h2>
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Contact Us
//             </button>
//             <button className="border border-[#0747A1] hover:text-white text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Sermons
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//         </div>
//       </div>

//       <div className="pt-8 w-full px-3 shadow-md rounded-md md:px-6 lg:w-[80%] mb-10">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           <PersonalInfo
//             title="Contact"
//             subtitle="Information"
//             barColor="bg-[#EBEBEB]"
//             height="h-2"
//           />
//           <PersonalInfo
//             title="Personal"
//             subtitle="Information"
//             barColor="bg-[#0747A1]"
//             height="h-2"
//             Curve="rounded-l-md"
//           />
//           <PersonalInfo
//             title="Payment"
//             subtitle="Method"
//             barColor="bg-[#EBEBEB]"
//             height="h-2"
//           />
//           <PersonalInfo
//             title="Payment"
//             subtitle="Information"
//             barColor="bg-[#EBEBEB]"
//             height="h-2"
//             Curve="rounded-l-md"
//           />
//         </div>
//         <h2 className="py-8 text-2xl font-semibold">Personal Information</h2>

//         <FormSubmission />

//         <div className="flex justify-center pt-10 pb-4 text-[#313131]">
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//            Stuck on the form?<span className="underline cursor-pointer">Let&apos;s call you</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "@/public/Images/Shop.png";
import PersonalInfo from "../components/PersonalInfo";
import FormSubmission from "../components/FormSubmission";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

// Type-safe cubic-bezier tuple for Transition.ease
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// Parent container with slower orchestration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.25,
      staggerChildren: 0.16,
    },
  },
};

// Core reveals
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_OUT_EXPO },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

// Distinct reveal for step tiles
const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.95, ease: EASE_OUT_EXPO },
  },
};

const Page = () => {
  return (
    // Global defaults to keep pacing consistent
    <MotionConfig transition={{ duration: 0.9, ease: "easeOut" }}>
      <motion.div
        className="xl:max-w-5xl px-3 md:px-6 lg:px-0 lg:max-w-4xl mx-auto flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Hero section */}
        <div className="grid grid-cols-1 py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
          <motion.div
            className="flex flex-col gap-4 justify-center"
            variants={fadeLeft}
          >
            <Text
              text="Giving Is Sowing into God's Kingdom"
              textClassName="text-[#0747A1]"
              lineClassName="bg-[#0747A1]"
            />
            <motion.h2
              className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
              variants={fadeUp}
            >
              A vibrant and spirit-filled church community
            </motion.h2>
            <motion.p
              className="text-[14px] lg:text-[13px] xl:text-[15px]"
              variants={fadeUp}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed.
            </motion.p>
            <motion.div className="flex gap-4" variants={fadeUp}>
              <Link href="/Contact">
                {" "}
                <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl transition-colors duration-300 ease-out hover:bg-[#063a87] transform will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0747A1]/50">
                  Contact Us
                </button>
              </Link>
              <Link href="/Sermons">
                {" "}
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-[#0747A1] hover:text-white text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-300 ease-out font-medium"
                >
                  Sermons
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-end" variants={fadeIn}>
            <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
          </motion.div>
        </div>

        {/* Steps + form card */}
        <motion.section
          className="pt-8 w-full px-3 shadow-md rounded-md md:px-6 lg:w-[80%] mb-10"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={scaleIn} whileHover={{ y: -3 }}>
              <PersonalInfo
                title="Contact"
                subtitle="Information"
                barColor="bg-[#EBEBEB]"
                height="h-2"
              />
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -3 }}>
              <PersonalInfo
                title="Personal"
                subtitle="Information"
                barColor="bg-[#0747A1]"
                height="h-2"
                Curve="rounded-l-md"
              />
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -3 }}>
              <PersonalInfo
                title="Payment"
                subtitle="Method"
                barColor="bg-[#EBEBEB]"
                height="h-2"
              />
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -3 }}>
              <PersonalInfo
                title="Payment"
                subtitle="Information"
                barColor="bg-[#EBEBEB]"
                height="h-2"
                Curve="rounded-l-md"
              />
            </motion.div>
          </motion.div>

          <motion.h2 className="py-8 text-2xl font-semibold" variants={fadeUp}>
            Personal Information
          </motion.h2>

          <motion.div variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <FormSubmission />
          </motion.div>

          <motion.div
            className="flex justify-center pt-10 pb-4 text-[#313131]"
            variants={fadeIn}
          >
            <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
              Stuck on the form?
              <span className="underline cursor-pointer">
                Let&apos;s call you
              </span>
            </p>
          </motion.div>
        </motion.section>
      </motion.div>
    </MotionConfig>
  );
};

export default Page;
