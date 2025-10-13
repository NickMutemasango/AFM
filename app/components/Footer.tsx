// "use client"

// import React from "react";
// import Image from "next/image";
// import Logo from "../../public/Images/Logo.svg";
// import Arrow from "../../public/Images/Arrow.svg";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const Footer = () => {

//    const [isScrollVisible, setIsScrollVisible] = useState(false);

//   // Scroll visibility effect
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsScrollVisible(true);
//       } else {
//         setIsScrollVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="bg-[#0747A1] py-16 px-3 md:px-6 lg:px-0 text-white">
//      <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
//        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
//         <Image src={Logo} alt="" />
//         <h2 className="font-semibold text-[20px] text-center lg:text-left py-5 pb-3 w-full lg:w-[25%] xl:w-[20%] lg:py-0">123 Church St. #23A Dallas, Texas 44635</h2>
//         <div className="flex flex-col gap-2 pb-8 items-center text-[#FFFFFF] lg:items-start">
//           <Link href="">Home</Link>
//           <Link href="">Departments</Link>
//           <Link href="">Gallery</Link>
//           <Link href="">Shop</Link>
//           <Link href="">Community Service</Link>
//         </div>
//         <div className="flex flex-col gap-2 pb-8 items-center lg:items-start">
//            <Link href="">About</Link>
//           <Link href="">Events</Link>
//           <Link href="">Sermons</Link>
//           <Link href="">Give</Link>
//           <Link href="">Contact</Link>
//         </div>
//           <div
//         className={`   right-8 z-50 transition-opacity duration-300 ${
//           isScrollVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <button
//           onClick={scrollToTop}
//           className="hidden lg:flex justify-center items-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0747A1] focus:ring-opacity-50"
//           aria-label="Scroll to top"
//         >
//           <Image
//             src={Arrow}
//             alt="Scroll to top"
//             className="w-6 h-6 animate-bounce"
//           />
//         </button>
//       </div>
//       </div>
//       <div className="flex flex-col  gap-2 items-center lg:items-start">
//         <p className="underline">(434) 546-4356</p>
//         <div className="flex flex-col lg:gap-10 lg:flex-row gap-2 items-center ">
//           <p className="underline">AFMDAL@gmail.com</p>
//           <p>© 2025 takue_thebrain. All rights reserved.</p>
//         </div>
//       </div>
//      </div>
//     </div>
//   );
// };

// export default Footer;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Logo from "../../public/Images/Logo.svg";
// import Arrow from "../../public/Images/Arrow.svg";
// import Link from "next/link";
// import { motion, AnimatePresence, type Variants, MotionConfig } from "framer-motion";

// const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { when: "beforeChildren", delayChildren: 0.15, staggerChildren: 0.12 }
//   }
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 12 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } }
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_EXPO } }
// };

// const item: Variants = {
//   hidden: { opacity: 0, y: 6 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } }
// };

// const Footer = () => {
//   const [isScrollVisible, setIsScrollVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => setIsScrollVisible(window.pageYOffset > 300);
//     window.addEventListener("scroll", toggleVisibility, { passive: true });
//     toggleVisibility();
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
//       <motion.footer
//         className="bg-[#0747A1] py-16 px-3 md:px-6 lg:px-0 text-white"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
//           <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
//             <motion.div variants={fadeIn}>
//               <Image src={Logo} alt="Logo" />
//             </motion.div>

//             <motion.h2
//               className="font-semibold text-[20px] text-center lg:text-left py-5 pb-3 w-full lg:w-[25%] xl:w-[20%] lg:py-0"
//               variants={fadeUp}
//             >
//               123 Church St. #23A Dallas, Texas 44635
//             </motion.h2>

//             <motion.nav className="flex flex-col gap-2 pb-8 items-center text-[#FFFFFF] lg:items-start" variants={container}>
//               {["Home", "Departments", "Gallery", "Shop", "Community Service"].map((label) => (
//                 <motion.span key={label} variants={item} whileHover={{ y: -2 }}>
//                   <Link href="">{label}</Link>
//                 </motion.span>
//               ))}
//             </motion.nav>

//             <motion.nav className="flex flex-col gap-2 pb-8 items-center lg:items-start" variants={container}>
//               {["About", "Events", "Sermons", "Give", "Contact"].map((label) => (
//                 <motion.span key={label} variants={item} whileHover={{ y: -2 }}>
//                   <Link href="">{label}</Link>
//                 </motion.span>
//               ))}
//             </motion.nav>

//             {/* Scroll-to-top floating button */}
//             <div className="fixed bottom-8 right-8 z-50">
//               <AnimatePresence>
//                 {isScrollVisible && (
//                   <motion.button
//                     key="scrollTop"
//                     onClick={scrollToTop}
//                     initial={{ opacity: 0, scale: 0.8, y: 8 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.8, y: 8 }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     whileHover={{ scale: 1.08, y: -2 }}
//                     whileTap={{ scale: 0.96 }}
//                     className="hidden lg:flex justify-center items-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0747A1] focus:ring-opacity-50"
//                     aria-label="Scroll to top"
//                   >
//                     <motion.span
//                       animate={{ y: [0, -6, 0] }}
//                       transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
//                     >
//                       <Image src={Arrow} alt="Scroll to top" className="w-6 h-6" />
//                     </motion.span>
//                   </motion.button>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           <motion.div className="flex flex-col  gap-2 items-center lg:items-start mt-6" variants={container}>
//             <motion.p className="underline" variants={item}>
//               (434) 546-4356
//             </motion.p>

//             <div className="flex flex-col lg:gap-10 lg:flex-row gap-2 items-center ">
//               <motion.p className="underline" variants={item}>
//                 AFMDAL@gmail.com
//               </motion.p>
//               <motion.p variants={item}>© 2025 takue_thebrain. All rights reserved.</motion.p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </MotionConfig>
//   );
// };

// export default Footer;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Logo from "../../public/Images/Logo.svg";
// import Arrow from "../../public/Images/Arrow.svg";
// import Link from "next/link";
// import {
//   motion,
//   AnimatePresence,
//   type Variants,
//   MotionConfig,
// } from "framer-motion";

// // Snappy but gentle easing tuple
// const EASE_EMPHASIZED = [0.2, 0.8, 0.2, 1] as const;

// // Footer entrance: slide up + blur + fade
// const footerEnter: Variants = {
//   hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.8, ease: EASE_EMPHASIZED },
//   },
// };

// // Staggered list container
// const listContainer: Variants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
// };

// // Link item rise
// const itemRise: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: EASE_EMPHASIZED },
//   },
// };

// const Footer = () => {
//   const [isScrollVisible, setIsScrollVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrollVisible(window.pageYOffset > 300);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
//       <motion.footer
//         className="bg-[#0747A1] py-16 px-3 md:px-6 lg:px-0 text-white"
//         variants={footerEnter}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//         <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
//           <motion.div
//             className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6"
//             variants={listContainer}
//             initial="hidden"
//             animate="show"
//           >
//             <motion.div variants={itemRise}>
//               <Image src={Logo} alt="Logo" />
//             </motion.div>

//             <motion.h2
//               className="font-semibold text-[20px] text-center lg:text-left py-5 pb-3 w-full lg:w-[25%] xl:w-[20%] lg:py-0"
//               variants={itemRise}
//             >
//               123 Church St. #23A Dallas, Texas 44635
//             </motion.h2>

//             <motion.nav
//               className="flex flex-col gap-2 pb-8 items-center text-[#FFFFFF] lg:items-start"
//               variants={listContainer}
//             >
//               {[
//                 "Home",
//                 "Departments",
//                 "Gallery",
//                 "Shop",
//                 "Community Service",
//               ].map((label) => (
//                 <motion.div
//                   key={label}
//                   variants={itemRise}
//                   whileHover={{ x: 4 }}
//                 >
//                   <Link href="">{label}</Link>
//                 </motion.div>
//               ))}
//             </motion.nav>

//             <motion.nav
//               className="flex flex-col gap-2 pb-8 items-center lg:items-start"
//               variants={listContainer}
//             >
//               {["About", "Events", "Sermons", "Give", "Contact"].map(
//                 (label) => (
//                   <motion.div
//                     key={label}
//                     variants={itemRise}
//                     whileHover={{ x: 4 }}
//                   >
//                     <Link href="">{label}</Link>
//                   </motion.div>
//                 )
//               )}
//             </motion.nav>

//             {/* Floating scroll-to-top with continuous bounce arrow */}
//             <div>
//               <AnimatePresence>
//                 {isScrollVisible && (
//                   <motion.button
//                     key="scrollTop"
//                     onClick={scrollToTop}
//                     initial={{ opacity: 0, scale: 0.85, y: 8 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.85, y: 8 }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.96 }}
//                     className="hidden lg:flex relative justify-center items-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0747A1] focus:ring-opacity-50"
//                     aria-label="Scroll to top"
//                   >
//                     {/* Bouncing arrow using keyframes */}
//                     <motion.span
//                       animate={{ y: [0, -8, 0] }}
//                       transition={{
//                         duration: 1.1,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="flex items-center justify-center"
//                     >
//                       <Image
//                         src={Arrow}
//                         alt="Scroll to top"
//                         className="w-6 h-6"
//                       />
//                     </motion.span>
//                   </motion.button>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           <motion.div
//             className="flex flex-col  gap-2 items-center lg:items-start mt-6"
//             variants={listContainer}
//             initial="hidden"
//             animate="show"
//           >
//             <Link href="tel:434) 546-4356">
//               {" "}
//               <motion.p className="underline" variants={itemRise}>
//                 (434) 546-4356
//               </motion.p>
//             </Link>
//             <div className="flex flex-col lg:gap-10 lg:flex-row gap-2 items-center ">
//               <Link href="mailto:afmdal@gmail.com">
//               <motion.p className="underline" variants={itemRise}>
//                 AFMDAL@gmail.com
//               </motion.p>
//               </Link>
//               <motion.p variants={itemRise}>
//                 © 2025 takue_thebrain. All rights reserved.
//               </motion.p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </MotionConfig>
//   );
// };

// export default Footer;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Logo from "../../public/Images/Logo.svg";
// import Arrow from "../../public/Images/Arrow.svg";
// import Link from "next/link";
// import { motion, AnimatePresence, type Variants, MotionConfig } from "framer-motion";

// const EASE_EMPHASIZED = [0.2, 0.8, 0.2, 1] as const;

// const footerEnter: Variants = {
//   hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.8, ease: EASE_EMPHASIZED },
//   },
// };

// const listContainer: Variants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
// };

// const itemRise: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: EASE_EMPHASIZED },
//   },
// };

// const Footer = () => {
//   const [isScrollVisible, setIsScrollVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrollVisible(window.pageYOffset > 300);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const leftLinks = [
//     { label: "Home", href: "/" },
//     { label: "Departments", href: "#" },
//     { label: "Gallery", href: "#" },
//     { label: "Shop", href: "/Shop" },
//     { label: "Community Service", href: "#" },
//   ];

//   const rightLinks = [
//     { label: "About", href: "/About" },
//     { label: "Events", href: "/Events" },
//     { label: "Sermons", href: "/Sermons" },
//     { label: "Give", href: "/Give" },
//     { label: "Contact", href: "/Contact" },
//   ];

//   return (
//     <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
//       <motion.footer
//         className="bg-[#0747A1] py-16 px-3 md:px-6 lg:px-0 text-white"
//         variants={footerEnter}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//         <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
//           <motion.div
//             className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6"
//             variants={listContainer}
//             initial="hidden"
//             animate="show"
//           >
//             <motion.div variants={itemRise}>
//               <Image src={Logo} alt="Logo" />
//             </motion.div>

//             <motion.h2
//               className="font-semibold text-[20px] text-center lg:text-left py-5 pb-3 w-full lg:w-[25%] xl:w-[20%] lg:py-0"
//               variants={itemRise}
//             >
//               123 Church St. #23A Dallas, Texas 44635
//             </motion.h2>

//             <motion.nav
//               className="flex flex-col gap-2 pb-8 items-center text-[#FFFFFF] lg:items-start"
//               variants={listContainer}
//             >
//               {leftLinks.map((l) => (
//                 <motion.div key={l.href} variants={itemRise} whileHover={{ x: 4 }}>
//                   <Link href={l.href} aria-label={`Go to ${l.label}`}>{l.label}</Link>
//                 </motion.div>
//               ))}
//             </motion.nav>

//             <motion.nav
//               className="flex flex-col gap-2 pb-8 items-center lg:items-start"
//               variants={listContainer}
//             >
//               {rightLinks.map((l) => (
//                 <motion.div key={l.href} variants={itemRise} whileHover={{ x: 4 }}>
//                   <Link href={l.href} aria-label={`Go to ${l.label}`}>{l.label}</Link>
//                 </motion.div>
//               ))}
//             </motion.nav>

//             {/* Floating scroll-to-top with continuous bounce arrow */}
//             <div className="">
//               <AnimatePresence>
//                 {isScrollVisible && (
//                   <motion.button
//                     key="scrollTop"
//                     onClick={scrollToTop}
//                     initial={{ opacity: 0, scale: 0.85, y: 8 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.85, y: 8 }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.96 }}
//                     className="hidden lg:flex relative justify-center items-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0747A1] focus:ring-opacity-50"
//                     aria-label="Scroll to top"
//                   >
//                     <motion.span
//                       animate={{ y: [0, -8, 0] }}
//                       transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
//                       className="flex items-center justify-center"
//                     >
//                       <Image src={Arrow} alt="Scroll to top" className="w-6 h-6" />
//                     </motion.span>
//                   </motion.button>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           <motion.div
//             className="flex flex-col  gap-2 items-center lg:items-start mt-6"
//             variants={listContainer}
//             initial="hidden"
//             animate="show"
//           >
//             {/* Use a plain anchor for tel: so the dialer opens */}
//             <a
//               href="tel:+14345464356"
//               className="underline"
//               aria-label="Call us at (+1) 434-546-4356"
//             >
//               (+1) 434‑546‑4356
//             </a>

//             <div className="flex flex-col lg:gap-10 lg:flex-row gap-2 items-center ">
//               {/* Use a plain anchor for mailto: so the mail client opens */}
//               <a
//                 href="mailto:AFMDAL@gmail.com?subject=Website%20inquiry"
//                 className="underline"
//                 aria-label="Email AFMDAL@gmail.com"
//               >
//                 AFMDAL@gmail.com
//               </a>

//               <motion.p variants={itemRise}>
//                 © 2025 takue_thebrain. All rights reserved.
//               </motion.p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </MotionConfig>
//   );
// };

// export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/Images/Logo.svg";
import Arrow from "../../public/Images/Arrow.svg";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  type Variants,
  MotionConfig,
} from "framer-motion";

// Unique, stable nav items for keys and routing
type NavLink = { id: string; label: string; href: string };

const leftLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "departments", label: "Departments", href: "#" },
  { id: "gallery", label: "Gallery", href: "#" },
  { id: "shop", label: "Shop", href: "/Shop" },
  { id: "community-service", label: "Community Service", href: "#" },
];

const rightLinks: NavLink[] = [
  { id: "about", label: "About", href: "/About" },
  { id: "events", label: "Events", href: "/Events" },
  { id: "sermons", label: "Sermons", href: "/Sermons" },
  { id: "give", label: "Give", href: "/Give" },
  { id: "contact", label: "Contact", href: "/Contact" },
];

// Easing and variants
const EASE_EMPHASIZED = [0.2, 0.8, 0.2, 1] as const;

const footerEnter: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_EMPHASIZED },
  },
};

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const itemRise: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EMPHASIZED },
  },
};

const Footer = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrollVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
      <motion.footer
        className="bg-[#0747A1] py-16 px-3 md:px-6 lg:px-0 text-white"
        variants={footerEnter}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="xl:max-w-5xl lg:max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6"
            variants={listContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemRise}>
              <Image src={Logo} alt="Logo" />
            </motion.div>

            <motion.h2
              className="font-semibold text-[20px] text-center lg:text-left py-5 pb-3 w-full lg:w-[25%] xl:w-[20%] lg:py-0"
              variants={itemRise}
            >
              123 Church St. #23A Dallas, Texas 44635
            </motion.h2>

            <motion.nav
              className="flex flex-col gap-2 pb-8 items-center text-white lg:items-start"
              variants={listContainer}
            >
              {leftLinks.map((l) => (
                <motion.div
                  key={l.id}
                  variants={itemRise}
                  whileHover={{ x: 4 }}
                >
                  <Link href={l.href} aria-label={`Go to ${l.label}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.nav
              className="flex flex-col gap-2 pb-8 items-center lg:items-start"
              variants={listContainer}
            >
              {rightLinks.map((l) => (
                <motion.div
                  key={l.id}
                  variants={itemRise}
                  whileHover={{ x: 4 }}
                >
                  <Link href={l.href} aria-label={`Go to ${l.label}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Floating scroll-to-top with continuous bounce arrow */}
            <div className="fixed bottom-8 right-8 z-50">
              <AnimatePresence>
                {isScrollVisible && (
                  <motion.button
                    key="scrollTop"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="hidden lg:flex relative justify-center items-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0747A1] focus:ring-opacity-50"
                    aria-label="Scroll to top"
                  >
                    <motion.span
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={Arrow}
                        alt="Scroll to top"
                        className="w-6 h-6"
                      />
                    </motion.span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 items-center lg:items-start mt-6"
            variants={listContainer}
            initial="hidden"
            animate="show"
          >
            {/* Tel link: use anchor so the dialer opens */}
            <a
              href="tel:+14345464356"
              className="underline"
              aria-label="Call us at (+1) 434-546-4356"
            >
              (+1) 434‑546‑4356
            </a>

            <div className="flex flex-col lg:gap-10 lg:flex-row gap-2 items-center ">
              {/* Mailto link: use anchor so the mail client opens */}
              <a
                href="mailto:AFMDAL@gmail.com?subject=Website%20inquiry"
                className="underline"
                aria-label="Email AFMDAL@gmail.com"
              >
                AFMDAL@gmail.com
              </a>

              <motion.p variants={itemRise}>
                © 2025 takue_thebrain. All rights reserved.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </MotionConfig>
  );
};

export default Footer;
