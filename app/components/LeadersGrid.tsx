// import Image from "next/image";

// interface Leader {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   email: string;
//   phone: string;
// }

// interface LeadersGridProps {
//   limit?: number;
// }

// const LeadersGrid: React.FC<LeadersGridProps> = ({ limit }) => {
//   const leaders: Leader[] = [
//     {
//       id: 1,
//       name: "Pastor Michael Johnson",
//       role: "Senior Pastor",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
//       email: "pastor.michael@afmchurch.org",
//       phone: "+1 (555) 123-4567"
//     },
//     {
//       id: 2,
//       name: "Sarah Williams",
//       role: "Worship Director",
//       image: "https://cdn-jehol.nitrocdn.com/XBwbYFbRYVMjkUYSoaVcGgRdcPyjhKvO/assets/images/optimized/rev-33be1b1/www.acstechnologies.com/church-growth/wp-content/uploads/sites/5/2023/05/church-leadership-roles-and-responsibilities-930x620.jpg",
//       email: "sarah.williams@afmchurch.org",
//       phone: "+1 (555) 123-4568"
//     },
//     {
//       id: 3,
//       name: "David Chen",
//       role: "Youth Pastor",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
//       email: "david.chen@afmchurch.org",
//       phone: "+1 (555) 123-4569"
//     },
//     {
//       id: 4,
//       name: "Elder Robert Martinez",
//       role: "Church Elder",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
//       email: "robert.martinez@afmchurch.org",
//       phone: "+1 (555) 123-4570"
//     },
//   ];

//   const displayLeaders = limit ? leaders.slice(0, limit) : leaders;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {displayLeaders.map((leader) => (
//         <div
//           key={leader.id}
//           className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
//         >
//           {/* Background Pattern */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//           {/* Image */}
//           <div className="relative z-10 mb-6">
//             <div className="relative inline-block">
//               <div className="w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden mx-auto">
//                 <img
//                   src={leader.image}
//                   alt={leader.name}

//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               {/* Glow effect */}
//               <div className="absolute inset-0 rounded-full bg-[#0747A1] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500" />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="relative z-10">
//             <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0747A1] transition-colors duration-300">
//               {leader.name}
//             </h3>
//             <p className="text-gray-600 font-medium mb-6 text-sm uppercase tracking-wide">
//               {leader.role}
//             </p>

//             {/* Contact Info */}
//             {/* <div className="space-y-3 mb-6">
//               <a
//                 href={`mailto:${leader.email}`}
//                 className="block py-3 px-4 bg-gray-100 rounded-xl hover:bg-[#0747A1] hover:text-white transition-all duration-300 group/email"
//               >
//                 <div className="flex items-center justify-center space-x-3">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <span className="font-medium text-sm">Send Email</span>
//                 </div>
//               </a>

//               <a
//                 href={`tel:${leader.phone}`}
//                 className="block py-3 px-4 bg-gray-100 rounded-xl hover:bg-[#0747A1] hover:text-white transition-all duration-300 group/phone"
//               >
//                 <div className="flex items-center justify-center space-x-3">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <span className="font-medium text-sm">Make Call</span>
//                 </div>
//               </a>
//             </div> */}

//             {/* Contact Details */}
//             <div className="border-t border-gray-200 pt-4 space-y-2">
//               <div className="text-xs text-gray-500">
//                 <a href={`mailto:${leader.email}`} className="hover:text-[#0747A1] transition-colors">
//                   {leader.email}
//                 </a>
//               </div>
//               <div className="text-xs text-gray-500">
//                 <a href={`tel:${leader.phone}`} className="hover:text-[#0747A1] transition-colors">
//                   {leader.phone}
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Corner Accent */}
//           <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#0747A1] to-blue-400 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LeadersGrid;

"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import Leader1 from "@/public/Images/Leaders/Leader1.jpg";
import Leader2 from "@/public/Images/Leaders/Leader2.jpg";
import Leader3 from "@/public/Images/Leaders/Leader3.jpg";
import Leader4 from "@/public/Images/Leaders/Leader4.jpg";

interface Leader {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  description: string;
  email: string;
  phone: string;
}

interface LeadersGridProps {
  limit?: number;
}

// Animation variants
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
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LeadersGrid: React.FC<LeadersGridProps> = ({ limit }) => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const { isDarkMode } = useTheme();

  const leaders: Leader[] = [
    {
      id: 1,
      name: "Pastor Michael Johnson",
      role: "Senior Pastor",
      image: Leader1,
      email: "pastor.michael@afmchurch.org",
      description:"Dedicated servant of god with a passion for ministry",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Pastor Johnson",
      role: "Senior Pastor",
      image: Leader3,
      email: "pastor.johnson@afmchurch.org",
      description:"Dedicated servant of god with a passion for ministry",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Youth Pastor",
      image: Leader2,
      email: "david.chen@afmchurch.org",
      description:"Dedicated servant of god with a passion for ministry",
      phone: "+1 (555) 123-4569",
    },
    {
      id: 4,
      name: "Elder Robert Martinez",
      role: "Church Elder",
      image: Leader4,
      email: "robert.martinez@afmchurch.org",
      description:"Dedicated servant of god with a passion for ministry",
      phone: "+1 (555) 123-4570",
    },
  ];

  const displayLeaders = limit ? leaders.slice(0, limit) : leaders;

  return (
    <div className="w-full">
      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 gap-16 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        {displayLeaders.map((leader, index) => (
          <motion.div
            key={leader.id}
            className={`relative ${
              isDarkMode ? "dark:bg-gray-900" : "bg-white"
            } rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group overflow-hidden min-h-[500px]`}
            variants={cardAnimation}
            whileHover={{
              y: -12,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Content Container */}
            <div
              className={`relative h-full flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section - Much Larger */}
              <motion.div
                className="lg:w-1/2 relative overflow-hidden"
                variants={imageAnimation}
              >
                <motion.div
                  className="w-full h-80 lg:h-full min-h-[400px] relative overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    whileHover={{ transition: { duration: 1.2 } }}
                  />
                </motion.div>

                {/* Role Badge on Image */}
                <motion.div
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {leader.role}
                  </span>
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex items-center p-8 lg:p-12">
                <div className="w-full space-y-6">
                  {/* Name */}
                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-[#0747A1] transition-colors duration-500"
                    variants={textAnimation}
                  >
                    {leader.name}
                  </motion.h3>

                  {/* Role for mobile */}
                  <motion.p
                    className="text-lg text-[#D4AA49] font-semibold uppercase tracking-wider lg:hidden"
                    variants={textAnimation}
                  >
                    {leader.role}
                  </motion.p>

                  {/* Description/Bio Placeholder */}
                  <motion.p
                    className="nav-link text-lg leading-relaxed"
                    variants={textAnimation}
                    transition={{ delay: 0.2 }}
                  >
                   {leader.description}
                  </motion.p>

                  {/* Contact Information */}
                  <motion.div
                    className="space-y-4 pt-6 border-t border-gray-200"
                    variants={textAnimation}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center gap-4 group/contact"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-[#0747A1] rounded-full flex items-center justify-center group-hover/contact:bg-[#D4AA49] transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a
                          href={`mailto:${leader.email}`}
                          className="nav-link hover:text-[#0747A1] transition-colors duration-300 font-medium"
                        >
                          {leader.email}
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 group/contact"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-[#0747A1] rounded-full flex items-center justify-center group-hover/contact:bg-[#D4AA49] transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a
                          href={`tel:${leader.phone}`}
                          className="nav-link hover:text-[#0747A1] transition-colors duration-300 font-medium"
                        >
                          {leader.phone}
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0747A1] to-[#D4AA49] rounded-full -translate-x-16 -translate-y-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              whileHover={{ scale: 1.1 }}
            />

            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-[#D4AA49] to-[#0747A1] rounded-full translate-x-12 translate-y-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LeadersGrid;
