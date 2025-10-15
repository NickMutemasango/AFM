// import LeadersGrid from "../components/LeadersGrid";

// export default function LeadersPage() {
//   return (
//     <div className="py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Leaders</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Meet the dedicated leaders who guide our AFM community with faith and service.
//           </p>
//         </div>
//         <LeadersGrid />
//       </div>
//     </div>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import LeadersGrid from "../components/LeadersGrid";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// const slideFromLeft: Variants = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { 
//     opacity: 1, 
//     x: 0,
//     transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
//   }
// };

// const slideFromRight: Variants = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { 
//     opacity: 1, 
//     x: 0,
//     transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
//   }
// };

export default function LeadersPage() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      className="py-12 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            variants={scaleIn}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-[#0747A1] to-[#D4AA49] rounded-full mx-auto"></div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Our <span className="bg-gradient-to-r from-[#0747A1] to-[#D4AA49] bg-clip-text text-transparent">Leaders</span>
          </motion.h1>
          
          {/* <motion.div
            variants={slideFromLeft}
            className="flex justify-center mb-4"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#0747A1] to-[#D4AA49] rounded-full flex items-center justify-center text-white font-bold text-lg">
              AFM
            </div>
          </motion.div> */}

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Meet the dedicated leaders who guide our{" "}
            <span className="font-semibold text-[#0747A1]">AFM community</span>{" "}
            with faith and service.
          </motion.p>

          {/* <motion.div
            variants={slideFromRight}
            className="mt-8 flex justify-center"
          >
            <div className="flex space-x-2">
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 bg-[#D4AA49] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: dot * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div> */}
        </motion.div>

        {/* Leaders Grid Section */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <LeadersGrid />
        </motion.div>

        {/* Footer Decoration */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center space-x-4 text-gray-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#0747A1]"></div>
            <span className="text-sm font-medium">Guided by Faith</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#D4AA49]"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}