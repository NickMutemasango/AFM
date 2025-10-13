// import React from "react";
// import Logo from "../../public/Images/Logo.svg";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between">
//       <div>
//         <Image src={Logo} alt="Logo" className="w-[60%]" />
//       </div>
//       <div className="flex gap-6 ">
//         <Link href="/"></Link>
//         <Link href="/abour">About</Link>
//         <Link href="/events">Events</Link>
//         <Link href="/sermons">Sermons</Link>
//         <Link href="/give">Give</Link>
//         <Link href="/shop">Shop</Link>
//       </div>
//       <div>
//         <button className="bg-[#0747A1] text-white px-6 py-2 rounded-3xl">Contact Us</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// "use client"; // Add this if using App Router

// import React, { useState } from "react";
// import Logo from "../../public/Images/Logo.svg";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/events", label: "Events" },
//     { href: "/sermons", label: "Sermons" },
//     { href: "/give", label: "Give" },
//     { href: "/shop", label: "Shop" },
//   ];

//   return (
//     <nav className="bg-white shadow-sm relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src={Logo}
//                 alt="Logo"
//                 className="w-[50%] md:w-40 lg:w-48 h-auto"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation Links - Hidden on mobile */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Contact Button - Hidden on mobile */}
//           <div className="hidden lg:block">
//             <button className="bg-[#0747A1] text-white px-6 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Contact Us
//             </button>
//           </div>

//           {/* Mobile menu button - Hidden on desktop */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 hover:text-[#0747A1] focus:outline-none focus:ring-2 focus:ring-[#0747A1] p-2 rounded"
//               aria-label="Toggle menu"
//               aria-expanded={isMenuOpen}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div
//           className={`lg:hidden transition-all duration-300 ease-in-out ${
//             isMenuOpen
//               ? "max-h-96 opacity-100 py-4"
//               : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           <div className="flex flex-col space-y-4 pb-4 border-t border-gray-200 pt-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-gray-700 hover:text-[#0747A1] font-medium py-2 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <div className="pt-2">
//               <button
//                 className="bg-[#0747A1] text-white w-full py-3 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useState } from "react";
// import Logo from "../../public/Images/Logo.svg";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/About", label: "About" },
//     { href: "/Events", label: "Events" },
//     { href: "/Sermons", label: "Sermons" },
//     { href: "/Give", label: "Give" },
//     { href: "/Shop", label: "Shop" },
//   ];

//   return (
//     <nav className="bg-white  relative">
//       {/* Outer container with max width */}
//       <div className="max-w-6xl lg:max-w-4xl mx-auto">
//         <div className="px-3 md:px-6 lg:px-14">
//           <div className="flex justify-between items-center py-6">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/">
//                 <Image
//                   src={Logo}
//                   alt="Logo"
//                   className="w-[50%] md:w-[50%] lg:w-[60%] h-auto"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation Links - Hidden on mobile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop Contact Button - Hidden on mobile */}
//             <div className="hidden lg:block">
//               <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//                 Contact Us
//               </button>
//             </div>

//             {/* Mobile menu button - Hidden on desktop */}
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-700 hover:text-[#0747A1] focus:outline-none focus:ring-2 focus:ring-[#0747A1] p-2 rounded"
//                 aria-label="Toggle menu"
//                 aria-expanded={isMenuOpen}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isMenuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation Menu */}
//           <div
//             className={`lg:hidden transition-all duration-300 ease-in-out ${
//               isMenuOpen
//                 ? "max-h-96 opacity-100 py-4"
//                 : "max-h-0 opacity-0 overflow-hidden"
//             }`}
//           >
//             <div className="flex flex-col space-y-4 pb-4 border-t border-gray-200 pt-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-gray-700 hover:text-[#0747A1] font-medium py-2 transition-colors duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <div className="pt-2">
//                 <button
//                   className="bg-[#0747A1] text-white w-full py-3 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useState } from "react";
// import Logo from "../../public/Images/Logo.svg";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/About", label: "About" },
//     { href: "/Events", label: "Events" },
//     { href: "/Sermons", label: "Sermons" },
//     { href: "/Give", label: "Give" },
//     { href: "/Shop", label: "Shop" },
//   ];

//   return (
//     <nav className="bg-white relative">
//       {/* Outer container with max width */}
//       <div className="max-w-6xl lg:max-w-4xl mx-auto">
//         <div className="px-3 md:px-6 lg:px-14">
//           <div className="flex justify-between items-center py-6">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/">
//                 <Image
//                   src={Logo}
//                   alt="Logo"
//                   className="w-[50%] md:w-[50%] lg:w-[60%] h-auto"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation Links - Hidden on mobile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop Contact Button - Hidden on mobile */}
//             <div className="hidden lg:block">
//               <Link href="/Contact" className="cursor-pointer">
//                 <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>

//             {/* Mobile menu button - Hidden on desktop */}
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-700 hover:text-[#0747A1] focus:outline-none focus:ring-2 focus:ring-[#0747A1] p-2 rounded z-50 relative"
//                 aria-label="Toggle menu"
//                 aria-expanded={isMenuOpen}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isMenuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <div
//         className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         {/* Backdrop */}
//         <div
//           className="absolute inset-0 bg-black bg-opacity-50"
//           onClick={() => setIsMenuOpen(false)}
//         ></div>

//         {/* Menu Panel */}
//         <div
//           className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col h-full">
//             {/* Close button */}
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-700 hover:text-[#0747A1] p-2 rounded"
//                 aria-label="Close menu"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <div className="flex-1 px-6 py-4">
//               <div className="flex flex-col space-y-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-gray-700 hover:text-[#0747A1] font-medium text-lg py-2 transition-colors duration-200 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Button */}
//             <div className="p-6 border-t border-gray-200">
//               <Link href="/Contact" className="cursor-pointer">
//                 <button
//                   className="bg-[#0747A1] text-white w-full py-3 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact Us
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useState } from "react";
// import Logo from "../../public/Images/Logo.svg";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAboutOpen, setIsAboutOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleAboutDropdown = () => {
//     setIsAboutOpen(!isAboutOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     // About link is removed from here since we're handling it separately
//     { href: "/Events", label: "Events" },
//     { href: "/Sermons", label: "Sermons" },
//     { href: "/Give", label: "Give" },
//     { href: "/Shop", label: "Shop" },
//   ];

//   const aboutLinks = [
//     { href: "/About", label: "About Us" },
//     { href: "/Leaders", label: "Our Leaders" },
//   ];

//   return (
//     <nav className="bg-white relative">
//       {/* Outer container with max width */}
//       <div className="max-w-6xl lg:max-w-4xl mx-auto">
//         <div className="px-3 md:px-6 lg:px-14">
//           <div className="flex justify-between items-center py-6">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/">
//                 <Image
//                   src={Logo}
//                   alt="Logo"
//                   className="w-[50%] md:w-[50%] lg:w-[60%] h-auto"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation Links - Hidden on mobile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-8">
//               {/* Home Link */}
//               <Link
//                 href="/"
//                 className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
//               >
//                 Home
//               </Link>
              
//               {/* About Dropdown - Second Position */}
//               <div className="relative">
//                 <button
//                   onClick={toggleAboutDropdown}
//                   className="flex items-center text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200 focus:outline-none"
//                 >
//                   About
//                   <svg
//                     className={`ml-1 w-4 h-4 transition-transform duration-200 ${
//                       isAboutOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isAboutOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
//                     {aboutLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#0747A1] transition-colors duration-200"
//                         onClick={() => setIsAboutOpen(false)}
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Rest of Navigation Links */}
//               {navLinks.slice(1).map((link) => ( // Start from index 1 to skip Home
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop Contact Button - Hidden on mobile */}
//             <div className="hidden lg:block">
//               <Link href="/Contact" className="cursor-pointer">
//                 <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>

//             {/* Mobile menu button - Hidden on desktop */}
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-700 hover:text-[#0747A1] focus:outline-none focus:ring-2 focus:ring-[#0747A1] p-2 rounded z-50 relative"
//                 aria-label="Toggle menu"
//                 aria-expanded={isMenuOpen}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isMenuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <div
//         className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         {/* Backdrop */}
//         <div
//           className="absolute inset-0 bg-black bg-opacity-50"
//           onClick={() => setIsMenuOpen(false)}
//         ></div>

//         {/* Menu Panel */}
//         <div
//           className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col h-full">
//             {/* Close button */}
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-700 hover:text-[#0747A1] p-2 rounded"
//                 aria-label="Close menu"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <div className="flex-1 px-6 py-4">
//               <div className="flex flex-col space-y-6">
//                 {/* Home Link */}
//                 <Link
//                   href="/"
//                   className="text-gray-700 hover:text-[#0747A1] font-medium text-lg py-2 transition-colors duration-200 border-b border-gray-100"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
                
//                 {/* About Section with Sub-links in Mobile */}
//                 <div className="border-b border-gray-100">
//                   <div className="text-gray-700 font-medium text-lg py-2">
//                     About
//                   </div>
//                   <div className="ml-4 flex flex-col space-y-4 mt-2">
//                     {aboutLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         className="text-gray-600 hover:text-[#0747A1] font-medium text-base py-1 transition-colors duration-200"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Rest of Navigation Links */}
//                 {navLinks.slice(1).map((link) => ( // Start from index 1 to skip Home
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-gray-700 hover:text-[#0747A1] font-medium text-lg py-2 transition-colors duration-200 border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Button */}
//             <div className="p-6 border-t border-gray-200">
//               <Link href="/Contact" className="cursor-pointer">
//                 <button
//                   className="bg-[#0747A1] text-white w-full py-3 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact Us
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Close dropdown when clicking outside */}
//       {isAboutOpen && (
//         <div
//           className="fixed inset-0 z-30"
//           onClick={() => setIsAboutOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import React, { useState } from "react";
import Logo from "../../public/Images/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Events", label: "Events" },
    { href: "/Sermons", label: "Sermons" },
    { href: "/Give", label: "Give" },
    { href: "/Shop", label: "Shop" },
  ];

  const aboutLinks = [
    { href: "/About", label: "About Us" },
    { href: "/Leaders", label: "Our Leaders" },
  ];

  return (
    <nav className="bg-white relative">
      {/* Outer container with max width */}
      <div className="max-w-6xl lg:max-w-4xl mx-auto">
        <div className="px-3 md:px-6 lg:px-14">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-[50%] md:w-[50%] lg:w-[60%] h-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links - Hidden on mobile */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {/* Home Link */}
              <Link
                href="/"
                className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* About Dropdown - Second Position */}
              <div className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="flex items-center text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200 focus:outline-none"
                >
                  About
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#0747A1] transition-colors duration-200"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Rest of Navigation Links */}
              {navLinks.slice(1).map((link) => ( // Start from index 1 to skip Home
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#0747A1] font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Contact Button - Hidden on mobile */}
            <div className="hidden lg:block cursor-pointer">
              <Link href="/Contact" className="cursor-pointer">
                <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile menu button - Hidden on desktop */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#0747A1] focus:outline-none focus:ring-2 focus:ring-[#0747A1] p-2 rounded z-50 relative"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close button - Removed duplicate */}
            <div className="flex justify-end p-4">
              {/* <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-[#0747A1] p-2 rounded"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-4">
              <div className="flex flex-col space-y-6">
                {/* Home Link */}
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#0747A1] font-medium text-lg py-2 transition-colors duration-200 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* About Section with Dropdown Arrow in Mobile */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={toggleMobileAboutDropdown}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#0747A1] font-medium text-lg py-2 transition-colors duration-200"
                  >
                    <span>About</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileAboutOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {/* Mobile About Dropdown Links */}
                  <div className={`ml-4 flex flex-col space-y-4 mt-2 transition-all duration-200 ${
                    isMobileAboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-600 hover:text-[#0747A1] font-medium text-base py-1 transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileAboutOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Rest of Navigation Links */}
                {navLinks.slice(1).map((link) => ( // Start from index 1 to skip Home
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-[#0747A1] font-medium text-lg py-2 transition-colors duration-200 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="p-6 border-t border-gray-200">
              <Link href="/Contact" className="cursor-pointer">
                <button
                  className="bg-[#0747A1] text-white w-full py-3 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {isAboutOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsAboutOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;