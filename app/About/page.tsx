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
import Mission from "../../public/Images/Mission.png";
import Motto from "../../public/Images/Moto.png";
import Values from "../../public/Images/Values.png";
import Link from "next/link";

// Animation variants
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Page = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-30px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-30px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-30px" });

  return (
    <div className="xl:max-w-5xl lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 py-10 lg:py-5 lg:grid-cols-2 gap-7"
      >
        {/* Left content */}
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
            We are a faith-driven church community passionate about worship,
            prayer, and building strong families in Christ. Everyone is welcome
            to grow, serve, and find purpose through the love of Jesus Christ.
          </motion.p>

          <motion.div variants={slideFromLeft}>
            <Link href="/Sermons">
              <button className="border cursor-pointer border-[#0747A1] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] hover:text-white transition-all duration-300 ease-out hover:scale-105 transform font-medium">
                Sermons
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="flex justify-end"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={slideFromRight}
        >
          <Image
            src={Hero}
            alt="AFM Hero Image"
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
            In a world longing for truth and connection, Apostolic Faith Mission
            Dallas stands as a beacon of hope and restoration. We are a
            Spirit-filled, Bible-rooted church committed to the presence of God,
            the power of prayer, and the unity of believers.
          </motion.p>

          <motion.p
            className="text-[14px] lg:text-[13px] xl:text-[16px]"
            variants={slideFromLeft}
          >
            Our doors are open to all seeking healing, purpose, and a deeper
            relationship with Jesus Christ. Guided by Pentecostal tradition, we
            pursue passionate worship, life-changing teaching, and outreach that
            touches lives.
          </motion.p>

          <motion.p
            className="text-[14px] lg:text-[13px] xl:text-[16px]"
            variants={slideFromLeft}
          >
            We believe the Holy Spirit empowers every believer to live boldly
            and love deeply. This is more than a gathering — it&apos;s a home. At AFM
            Dallas, you are seen, known, and loved.
          </motion.p>
        </motion.div>

        <motion.div variants={slideFromRight} className="flex justify-end">
          <Image
            src={About}
            alt="About AFM Dallas"
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
        {/* Left images */}
        <motion.div className="flex flex-col gap-3" variants={staggerContainer}>
          <motion.div variants={slideFromLeft}>
            <Image
              src={Ab1}
              alt="Church members worshipping"
              className="w-full transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div variants={slideFromLeft}>
            <Image
              src={Ab2}
              alt="AFM Dallas community"
              className="w-full -mt-[20%] transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div variants={slideFromLeft}>
            <Image
              src={Ab3}
              alt="AFM Fellowship"
              className="w-full transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="flex flex-col lg:w-[60%]"
          variants={staggerContainer}
        >
          {[
            {
              src: Mission,
              title: "Our Mission",
              description:
                "To grow as a church that walks in love, studying scriptures, engaging in prayer, fellowship, praise, worship, and thanksgiving — and sharing the gospel.",
            },
            {
              src: Vision,
              title: "Our Vision",
              description:
                "To be a loving community of multi-racial and multi-cultural believers who reach out across generations with the Gospel of Jesus Christ.",
            },
            {
              src: Motto,
              title: "Our Motto",
              description: "Walking In Love.",
            },
            {
              src: Values,
              title: "Our Values",
              description:
                "We value integrity, love, humility, faith, and service — living out the gospel daily in word and deed.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group flex flex-col gap-3 py-3 transition-all duration-500 hover:scale-105 rounded-lg p-4"
              variants={cardAnimation}
            >
              <Image
                src={item.src}
                alt={item.title}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <h4 className="font-semibold transition-colors duration-300 group-hover:text-[#0747A1]">
                {item.title}
              </h4>
              <p className="text-[14px] lg:text-[13px] xl:text-[15px] transition-colors duration-300 group-hover:text-[#0747A1]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
