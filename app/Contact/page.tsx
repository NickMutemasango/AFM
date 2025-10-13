// import React from "react";
// import Text from "../components/Text";
// import Image from "next/image";
// import Hero from "@/public/Images/Contact.png";
// import Call from "@/public/Images/Call.svg";
// import Email from "@/public/Images/Email.svg";
// import Location from "@/public/Images/Location.svg";
// import Instagram from "@/public/Images/Instagram.svg";
// import Twitter from "@/public/Images/Twitter.svg";
// import Facebook from "@/public/Images/Facebook.svg";
// import ContactInput from "../components/ContactInputs";
// import Bluetick from "@/public/Images/Tick.svg";
// import Tick from "@/public/Images/Tick.png";

// const page = () => {
//   return (
//     <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto">
//       <div className=" grid grid-cols-1  py-10 lg:py-5 lg:grid-cols-2 gap-7 mb-20">
//         <div className="flex flex-col gap-4 justify-center ">
//           <Text
//             text="Reach Out. Connect. Visit."
//             textClassName="text-blue-600"
//             lineClassName="bg-blue-600"
//           />
//           <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//             We’d Love to Hear From You
//           </h2>
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//             Whether you have questions, need prayer, or want to learn more about
//           our ministry, we&apos;re here for you. Feel free to get in touch, stop by
//             during one of our services, or follow us online. Let’s walk this
//             journey of faith together.
//           </p>
//           <div>
//             <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Contact Us
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-10 pb-10 xl:pb-20">
//         <div className="bg-[#0747A1] lg:w-[45%] xl:w-[37%] text-white py-8 px-4 rounded-md">
//           <div>
//             <h2 className="text-2xl font-semibold pb-2">Contact Information</h2>
//             <p className="text-[#C9C9C9] pb-10 text-[14px] lg:text-[13px] xl:text-[15px]">
//               Say something to start a live chat!
//             </p>
//           </div>
//           <div className="flex flex-col justify-center pb-14">
//             <div className="flex pb-7  items-center gap-3">
//               <Image src={Call} alt="" />
//               <p className="text-[14px] lg:text-[13px] xl:text-[15px]">+263 123 456 789</p>
//             </div>
//             <div className="flex pb-7  items-center gap-3">
//               <Image src={Email} alt="" />
//               <p className="text-[14px] lg:text-[13px] xl:text-[15px]">demo@gmail.com</p>
//             </div>
//             <div className="flex pb-7 items-center gap-3">
//               {" "}
//               <Image src={Location} alt="" />
//               <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                 132 Dartmouth Street Boston, Massachusetts 02156 United States
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-5 ">
//             <Image src={Twitter} alt="" />
//             <Image src={Instagram} alt="" />
//             <Image src={Facebook} alt="" />
//           </div>
//         </div>
//         <div>
//           <div className="pb-5">
//             <ContactInput />
//           </div>
//           <h4 className="font-semibold text-[15px] pb-3">Select Subject?</h4>
//           <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 pb-10">
//             <div className="flex items-center gap-2">
//               <Image src={Bluetick} alt="" className="w-4 h-4" />
//               <p className="text-sm text-[#0747A1]">General Inquiry</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <Image src={Tick} alt="" className="w-4 h-4" />
//               <p className="text-sm">General Inquiry</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <Image src={Tick} alt="" className="w-4 h-4" />
//               <p className="text-sm">General Inquiry</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <Image src={Tick} alt="" className="w-4 h-4" />
//               <p className="text-sm">General Inquiry</p>
//             </div>
//           </div>
//           <div className="pb-16">
//             <p className="text-[#434147] text-[14px] pb-2">Message</p>
//             <input
//               type="text"
//               placeholder="Write your message here "
//               className="text-[#999999] text-[14px] pb-3 outline-0"
//             />
//             <hr className="text-[#EBEBEB] " />
//           </div>
//           <button className="w-[35%] md:w-[20%] cursor-pointer lg:w-[35%] text-sm text-white py-3 bg-[#0747A1] rounded-3xl">
//             Send Message
//           </button>
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
import Hero from "@/public/Images/Contact.png";
import Call from "@/public/Images/Call.svg";
import Email from "@/public/Images/Email.svg";
import Location from "@/public/Images/Location.svg";
import Instagram from "@/public/Images/Instagram.svg";
import Twitter from "@/public/Images/Twitter.svg";
import Facebook from "@/public/Images/Facebook.svg";
import ContactInput from "../components/ContactInputs";
import Bluetick from "@/public/Images/Tick.svg";
import Link from "next/link";
import Tick from "@/public/Images/Tick.png";
import { motion, type Variants, MotionConfig } from "framer-motion";
import Side from "@/public/Images/ContactSide.png"

// Type-safe cubic-bezier tuple for Transition.ease
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// Parent container with orchestration
const container: Variants = {
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
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_OUT_EXPO },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

// Distinct reveals
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.95, ease: EASE_OUT_EXPO },
  },
};

const Page = () => {
  return (
    // Global default transition for cohesive pacing
    <MotionConfig transition={{ duration: 0.9, ease: "easeOut" }}>
      <motion.div
        className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Hero */}
        <div className=" grid grid-cols-1  py-10 lg:py-5 lg:grid-cols-2 gap-7 mb-20">
          <motion.div
            className="flex flex-col gap-4 justify-center"
            variants={fadeLeft}
          >
            <Text
              text="Reach Out. Connect. Visit."
              textClassName="text-blue-600"
              lineClassName="bg-blue-600"
            />
            <motion.h2
              className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
              variants={fadeUp}
            >
              We’d Love to Hear From You
            </motion.h2>
            <motion.p
              className="text-[14px] lg:text-[13px] xl:text-[15px]"
              variants={fadeUp}
            >
              Whether you have questions, need prayer, or want to learn more
              about our ministry, we&apos;re here for you; feel free to get in
              touch, stop by during one of our services, or follow us online to
              walk this journey of faith together.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-300 ease-out font-medium"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-end" variants={fadeIn}>
            <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
          </motion.div>
        </div>

        {/* Info + Form */}
        <div className="flex flex-col md:flex-col-reverse lg:flex-row justify-center items-center gap-10 pb-10 xl:pb-20">
          {/* Contact card */}
          
          <motion.div
            className="bg-[#0747A1] relative md:w-[55%] lg:w-[45%] xl:w-[40%] text-white py-16 xl:py-16 xl:px-8 px-4 rounded-md"
            variants={fadeRight}
          >
            <Image src={Side} alt="" className="absolute bottom-0 right-0 w-[30%] md:w-[20%] xl:w-[30%]"/>
            <div>
              <h2 className="text-2xl font-semibold pb-2">
                Contact Information
              </h2>
              <p className="text-[#C9C9C9] pb-10 xl:pb-20 md:pb-16 text-[14px] lg:text-[13px] xl:text-[15px]">
                Say something to start a live chat!
              </p>
            </div>

            <motion.div
              className="flex flex-col justify-center pb-14"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className=""
                variants={scaleIn}
              >
              
                <Link href="tel:+263 123 456 789" className="flex mb-7  items-center gap-3">
                  <Image src={Call} alt="" />
                <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                  +263 123 456 789
                </p>
                </Link>
              </motion.div>

              <motion.div
                
                variants={scaleIn}
              >
               
                <Link href="mailto:demo@gmail.com" className="flex mb-7  items-center gap-3">
                 <Image src={Email} alt="" />
                  <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                    demo@gmail.com
                  </p>
                </Link>
              </motion.div>

              <motion.div
                className="flex pb-7 items-center gap-3"
                variants={scaleIn}
              >
                <Image src={Location} alt="" />
                <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="flex gap-5 " variants={fadeUp}>
              {[Twitter, Instagram, Facebook].map((icon, i) => (
                <motion.div key={i} whileHover={{ y: -2, scale: 1.05 }}>
                  <Image src={icon} alt="" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form side */}
          <motion.div variants={fadeUp} className="flex-1 w-full">
            <div className="pb-5">
              <ContactInput />
            </div>

            <h4 className="font-semibold text-[15px] pb-3">Select Subject?</h4>

            <motion.div
              className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 pb-10"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { icon: Bluetick, label: "General Inquiry", active: true },
                { icon: Tick, label: "General Inquiry", active: false },
                { icon: Tick, label: "General Inquiry", active: false },
                { icon: Tick, label: "General Inquiry", active: false },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-2"
                >
                  <Image src={s.icon} alt="" className="w-4 h-4" />
                  <p className={`text-sm ${s.active ? "text-[#0747A1]" : ""}`}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="pb-16" variants={fadeIn}>
              <p className="text-[#434147] text-[14px] pb-2">Message</p>
              <input
                type="text"
                placeholder="Write your message here "
                className="text-[#999999] text-[14px] pb-3 outline-0"
              />
              <hr className="text-[#EBEBEB] " />
            </motion.div>

            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-[35%] md:w-[20%] cursor-pointer lg:w-[35%] text-sm text-white py-3 bg-[#0747A1] rounded-3xl"
            >
              Send Message
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default Page;
