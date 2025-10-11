// import React from "react";
// import Image from "next/image";
// import Searche from "@/public/Images/search-normal.svg";
// import Filter from "@/public/Images/filter.svg";
// import Sort from '@/public/Images/sort.svg'

// interface SearchProps {
//   heading: string;
// }

// const Search: React.FC<SearchProps> = ({ heading }) => {
//   return (
//     <div className="flex flex-col gap-2 justify-between">
//       <div className="flex gap-3 pb-10 justify-between">
//         <div className="bg-gray-50 flex gap-2 items-center py-2 md:py-3 pl-5 rounded-[6px] w-[100%]">
//           <Image src={Searche} alt="" className="w-[10%] md:w-[5%] xl:w-[2%]" />
//           <p>Search Item</p>
//         </div>
//         <div className="flex gap-1 justify-center items-center bg-gray-50 rounded-[6px] py-2 px-4 md:px-3">
//           <Image src={Filter} alt="" className="w-[30%]" />
//           <p>Filter</p>
//         </div>
//       </div>

//       <div className="flex justify-between gap-3">
//         <div className="flex justify-center items-center gap-4">
//           <h2 className="font-semibold text-2xl xl:text-[28px]">{heading}</h2>
//           <div className="bg-gray-100 rounded-md flex justify-center items-center px-2">
//             <p className="text-[#518581] font-semibold text-sm">184</p>
//           </div>
//         </div>
//         <div className="flex gap-1 justify-center items-center bg-gray-50 rounded-md py-2 px-2 xl:px-2 md:px-10 md:rounded-[3px]">
//           <Image src={Sort} alt="" className="w-[20%]" />
//           <p className="text-sm">Sort by</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Searche from "@/public/Images/search-normal.svg";
import Filter from "@/public/Images/filter.svg";
import Sort from '@/public/Images/sort.svg';

interface SearchProps {
  heading: string;
}

// Helper function to create properly typed variants
const createVariants = <T extends Variants>(variants: T): T => variants;

// Animation variants with proper typing
const containerVariants = createVariants({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
});

const itemVariants = createVariants({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
});

const buttonVariants = createVariants({
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
});

const searchVariants = createVariants({
  idle: { 
    scale: 1,
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
  },
  focused: { 
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(7, 71, 161, 0.2), 0 0 0 2px rgba(7, 71, 161, 0.1)",
    transition: { duration: 0.3 }
  }
});

const countVariants = createVariants({
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: { 
      duration: 0.6,
      rotate: { duration: 0.4 }
    }
  }
});

const Search: React.FC<SearchProps> = ({ heading }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-2 justify-between"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Search and Filter Row */}
      <div className="flex gap-3 pb-10 justify-between">
        {/* Search Input */}
        <motion.div
          className="bg-gray-50 flex gap-3 items-center py-2 md:py-3 pl-5 rounded-2xl w-[100%] border border-transparent"
          variants={searchVariants}
          initial="idle"
          animate={isSearchFocused ? "focused" : "idle"}
          whileHover={{ 
            scale: 1.01,
            backgroundColor: "rgb(249, 250, 251)",
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={{ 
              scale: isSearchFocused ? 1.2 : 1,
              rotate: isSearchFocused ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Image src={Searche} alt="Search" className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
          <motion.input
            type="text"
            placeholder="Search events..."
            className="bg-transparent outline-none w-full text-gray-600 placeholder-gray-400"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            whileFocus={{ scale: 1.02 }}
          />
          
          {/* Search animation dots */}
          <AnimatePresence>
            {isSearchFocused && (
              <motion.div
                className="flex gap-1 pr-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-1 h-1 bg-[#0747A1] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: dot * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Filter Button */}
        <motion.button
          className="flex gap-2 justify-center items-center bg-gray-50 rounded-2xl py-2 px-4 md:px-4 border border-transparent hover:border-[#0747A1] transition-colors duration-300 group relative"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <motion.div
            animate={{ rotate: isFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={Filter} alt="Filter" className="w-5 h-5" />
          </motion.div>
          <span className="text-gray-600 group-hover:text-[#0747A1] transition-colors duration-300">
            Filter
          </span>
          
          {/* Filter pulse effect */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AA49] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>
      </div>

      {/* Header and Sort Row */}
      <div className="flex justify-between gap-3 items-center">
        {/* Heading and Count */}
        <motion.div 
          className="flex justify-center items-center gap-4"
          variants={containerVariants}
        >
          <motion.h2 
            className="font-semibold text-2xl xl:text-[28px] text-gray-900"
            whileHover={{ 
              scale: 1.02,
              color: "#0747A1",
              transition: { duration: 0.2 }
            }}
          >
            {heading}
          </motion.h2>
          
          <motion.div 
            className="bg-gray-100 rounded-md flex justify-center items-center px-3 py-1"
            variants={countVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.p 
              className="text-[#518581] font-semibold text-sm"
              whileHover={{ scale: 1.1 }}
            >
              184
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Sort Button */}
        <motion.button
          className="flex gap-2 justify-center items-center bg-gray-50 rounded-xl py-2 px-4 border border-transparent hover:border-[#0747A1] transition-colors duration-300 group relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          {/* Background shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full"
            transition={{ duration: 1 }}
          />
          
          <motion.div
            animate={{ rotate: isSortOpen ? 180 : 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <Image src={Sort} alt="Sort" className="w-5 h-5" />
          </motion.div>
          <span className="text-gray-600 text-sm group-hover:text-[#0747A1] transition-colors duration-300">
            Sort by
          </span>
        </motion.button>
      </div>

      {/* Filter Dropdown */}
      {/* <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="absolute top-32 right-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 z-10"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.h3 
              className="font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Filter Options
            </motion.h3>
            {["Date", "Category", "Location", "Type"].map((option, index) => (
              <motion.div
                key={option}
                className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg px-2 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-3 h-3 border-2 border-[#0747A1] rounded-sm" />
                <span className="text-gray-700">{option}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Sort Dropdown */}
      {/* <AnimatePresence>
        {isSortOpen && (
          <motion.div
            className="absolute top-32 right-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 z-10 min-w-40"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.h3 
              className="font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Sort By
            </motion.h3>
            {["Newest", "Oldest", "Most Popular", "Alphabetical"].map((option, index) => (
              <motion.div
                key={option}
                className="py-2 hover:bg-gray-50 rounded-lg px-2 cursor-pointer text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ 
                  x: 5,
                  color: "#0747A1",
                  transition: { duration: 0.2 }
                }}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.div>
  );
};

export default Search;