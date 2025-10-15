"use client"

import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "@/public/Images/Shop.png";
import PersonalInfo from "../components/PersonalInfo";
import FormSubmission from "../components/FormSubmission";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { staggerContainer, slideFromLeft, slideFromRight, slideFromBottom, cardAnimation } from "@/variants";

const Page = () => {
  const heroRef = useRef(null);

  // Check if elements are in view - only keeping the ones you actually use
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={heroRef}
      className="xl:max-w-5xl px-3 md:px-6 lg:px-0  lg:max-w-4xl  mx-auto flex flex-col items-center"
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
              text="Giving Is Sowing into God's Kingdom"
              textClassName="text-[#0747A1]"
              lineClassName="bg-[#0747A1]"
            />
          </motion.div>
          <motion.h2
            variants={slideFromLeft}
            transition={{ delay: 0.1 }}
            className="text-[#434147] font-semibold text-[30px] xl:text-[40px]"
          >
            A vibrant and spirit-filled church community
          </motion.h2>
          <motion.p
            variants={slideFromLeft}
            transition={{ delay: 0.2 }}
            className="text-[14px] lg:text-[13px] xl:text-[15px]"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </motion.p>
          <motion.div
            variants={slideFromLeft}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
              Contact Us
            </button>
            <button className="border border-[#0747A1] hover:text-white text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
              Sermons
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

      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={slideFromBottom}
  className="pt-8 w-full px-3 shadow-md rounded-md md:px-6 lg:w-[80%] mb-10"
>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <motion.div variants={cardAnimation}>
      <PersonalInfo
        title="Contact"
        subtitle="Information"
        barColor="bg-[#EBEBEB]"
        height="h-2"
      />
    </motion.div>
    <motion.div variants={cardAnimation}>
      <PersonalInfo
        title="Personal"
        subtitle="Information"
        barColor="bg-[#0747A1]"
        height="h-2"
        Curve="rounded-l-md"
      />
    </motion.div>
    <motion.div variants={cardAnimation}>
      <PersonalInfo
        title="Payment"
        subtitle="Method"
        barColor="bg-[#EBEBEB]"
        height="h-2"
      />
    </motion.div>
    <motion.div variants={cardAnimation}>
      <PersonalInfo
        title="Payment"
        subtitle="Information"
        barColor="bg-[#EBEBEB]"
        height="h-2"
        Curve="rounded-l-md"
      />
    </motion.div>
  </motion.div>
  
  <motion.h2 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={slideFromBottom}
    transition={{ delay: 0.2 }}
    className="py-8 text-2xl font-semibold"
  >
    Personal Information
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={slideFromBottom}
    transition={{ delay: 0.3 }}
  >
    <FormSubmission />
  </motion.div>

  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={slideFromBottom}
    transition={{ delay: 0.4 }}
    className="flex justify-center pt-10 pb-4 text-[#313131]"
  >
    <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
      Stuck on the form?
      <span className="underline cursor-pointer">
        Let&apos;s call you
      </span>
    </p>
  </motion.div>
</motion.div>
    </div>
  );
};

export default Page;
