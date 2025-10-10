"use client"

import React from "react";
import Image from "next/image";
import Logo from "../../public/Images/Logo.svg";
import Arrow from "../../public/Images/Arrow.svg";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {

   const [isScrollVisible, setIsScrollVisible] = useState(false);

  // Scroll visibility effect
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className="bg-[#0747A1] py-16 px-3 md:px-6 lg:px-0 text-white">
     <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <Image src={Logo} alt="" />
        <h2 className="font-semibold text-[20px] text-center lg:text-left py-5 pb-3 w-full lg:w-[25%] xl:w-[20%] lg:py-0">123 Church St. #23A Dallas, Texas 44635</h2>
        <div className="flex flex-col gap-2 pb-8 items-center text-[#FFFFFF] lg:items-start">
          <Link href="">Home</Link>
          <Link href="">Departments</Link>
          <Link href="">Gallery</Link>
          <Link href="">Shop</Link>
          <Link href="">Community Service</Link>
        </div>
        <div className="flex flex-col gap-2 pb-8 items-center lg:items-start">
           <Link href="">About</Link>
          <Link href="">Events</Link>
          <Link href="">Sermons</Link>
          <Link href="">Give</Link>
          <Link href="">Contact</Link>
        </div>
          <div
        className={`   right-8 z-50 transition-opacity duration-300 ${
          isScrollVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="hidden lg:flex justify-center items-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0747A1] focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <Image 
            src={Arrow} 
            alt="Scroll to top" 
            className="w-6 h-6 animate-bounce"
          />
        </button>
      </div>
      </div>
      <div className="flex flex-col  gap-2 items-center lg:items-start">
        <p className="underline">(434) 546-4356</p>
        <div className="flex flex-col lg:gap-10 lg:flex-row gap-2 items-center ">
          <p className="underline">AFMDAL@gmail.com</p>
          <p>© 2025 takue_thebrain. All rights reserved.</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Footer;
