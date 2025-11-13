"use client";

import { useMemo, useRef } from "react";
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
  category: string;
}

interface LeadersGridProps {
  limit?: number;
}

// Animations
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageAnimation: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const LeadersGrid: React.FC<LeadersGridProps> = () => {
  const { isDarkMode } = useTheme();

  // 🧠 Memoize leaders to prevent recalculations
  const leaders = useMemo<Leader[]>(() => {
    return [
      // 6 Pastors
      {
        id: 1,
        name: "Pastor Kwesha & Amai",
        role: "Senior Pastors",
        image: Leader1,
        email: "pastor.kwesha@afmchurch.org",
        description: "A dedicated shepherd leading with vision and compassion.",
        phone: "+1 (555) 111-1111",
        category: "Pastors",
      },
      {
        id: 2,
        name: "Overseer D. Deshu & Amai",
        role: "Overseer",
        image: Leader2,
        email: "pastor.mary@afmchurch.org",
        description: "Empowering the church through prayer and purpose.",
        phone: "+1 (555) 111-1112",
        category: "Pastors",
      },
      {
        id: 3,
        name: "Pastor T. Deshu & Amai",
        role: "Associate Pastor",
        image: Leader3,
        email: "pastor.johnson@afmchurch.org",
        description: "Serving with humility and strength in God's word.",
        phone: "+1 (555) 111-1113",
        category: "Pastors",
      },
      {
        id: 4,
        name: "Pastor Dzanwa",
        role: "Youth Pastor",
        image: Leader4,
        email: "david.chen@afmchurch.org",
        description: "Guiding the next generation with passion and purpose.",
        phone: "+1 (555) 111-1114",
        category: "Pastors",
      },
      {
        id: 5,
        name: "Pastor C. Mabuye",
        role: "Outreach Pastor",
        image: Leader1,
        email: "jane.lewis@afmchurch.org",
        description: "Committed to reaching souls and building hope.",
        phone: "+1 (555) 111-1115",
        category: "Pastors",
      },
      {
        id: 6,
        name: "Pastor Maredza",
        role: "Teaching Pastor",
        image: Leader2,
        email: "samuel.wright@afmchurch.org",
        description: "Teaching truth with clarity and conviction.",
        phone: "+1 (555) 111-1116",
        category: "Pastors",
      },

      // 3 Elders
      {
        id: 7,
        name: "Elder Phiri & Amai",
        role: "Church Elder",
        image: Leader3,
        email: "robert.martinez@afmchurch.org",
        description: "Standing firm in wisdom and grace.",
        phone: "+1 (555) 222-1111",
        category: "Elders",
      },
      {
        id: 8,
        name: "Elder Kamhaka",
        role: "Church Elder",
        image: Leader4,
        email: "james.kim@afmchurch.org",
        description: "A pillar of faith and integrity in leadership.",
        phone: "+1 (555) 222-1112",
        category: "Elders",
      },
      {
        id: 9,
        name: "Elder Mupanda",
        role: "Church Elder",
        image: Leader1,
        email: "sarah.moyo@afmchurch.org",
        description: "Serving with faith and steadfast love.",
        phone: "+1 (555) 222-1113",
        category: "Elders",
      },

      // 2 Deacons
      {
        id: 10,
        name: "Deacon Ncube & Amai",
        role: "Deacon",
        image: Leader2,
        email: "peter.johnson@afmchurch.org",
        description: "Faithful in service and strong in spirit.",
        phone: "+1 (555) 333-1111",
        category: "Deacons",
      },
      {
        id: 11,
        name: "Deacon Nyamanjiwa & Amai",
        role: "Deacon",
        image: Leader3,
        email: "ruth.allen@afmchurch.org",
        description: "Serving the church family with compassion and care.",
        phone: "+1 (555) 333-1112",
        category: "Deacons",
      },

      // 8 Church Board
      {
        id: 12,
        name: "Pastor Kwesha",
        role: "Chairman",
        image: Leader4,
        email: "john.smith@afmchurch.org",
        description: "Faithful steward of the church vision.",
        phone: "+1 (555) 444-1111",
        category: "Church Board",
      },
      {
        id: 13,
        name: "Overseer Deshu",
        role: "Board Member",
        image: Leader1,
        email: "lisa.green@afmchurch.org",
        description: "Passionate about community outreach and growth.",
        phone: "+1 (555) 444-1112",
        category: "Church Board",
      },
      {
        id: 14,
        name: "Pastor R. Deshu",
        role: "Secretary",
        image: Leader2,
        email: "ethan.brown@afmchurch.org",
        description: "Dedicated to excellence in administration.",
        phone: "+1 (555) 444-1113",
        category: "Church Board",
      },
      {
        id: 15,
        name: "Elder Kamhaka",
        role: "Administrator",
        image: Leader3,
        email: "grace.thompson@afmchurch.org",
        description: "Championing faith-based initiatives.",
        phone: "+1 (555) 444-1114",
        category: "Church Board",
      },
      {
        id: 16,
        name: "Pastor Dzanwa",
        role: "Board Member",
        image: Leader4,
        email: "daniel.white@afmchurch.org",
        description: "Ensuring the mission stays on course.",
        phone: "+1 (555) 444-1115",
        category: "Church Board",
      },
      {
        id: 17,
        name: "Pastor Mabuye",
        role: "Board Member",
        image: Leader1,
        email: "sophia.reyes@afmchurch.org",
        description: "Encouraging unity and growth within the ministry.",
        phone: "+1 (555) 444-1116",
        category: "Church Board",
      },
      {
        id: 18,
        name: "Elder Phiri",
        role: "Board Member",
        image: Leader2,
        email: "mark.davis@afmchurch.org",
        description: "Focused on spiritual and structural development.",
        phone: "+1 (555) 444-1117",
        category: "Church Board",
      },
    ];
  }, []);

  // Group leaders by category
  const groupedLeaders = useMemo(() => {
    return leaders.reduce((groups, leader) => {
      if (!groups[leader.category]) groups[leader.category] = [];
      groups[leader.category].push(leader);
      return groups;
    }, {} as Record<string, Leader[]>);
  }, [leaders]);

  const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (

    
    <div className="w-full space-y-20">
      {Object.entries(groupedLeaders).map(([category, members]) => {
        
      

        return (
          <motion.section
            key={category}
            ref={sectionRef}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Category Title */}
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-center text-[#0747A1] uppercase tracking-wider"
              variants={textAnimation}
            >
              {category}
            </motion.h2>

            {/* Leader Cards */}
            <div className="grid grid-cols-1 gap-16 max-w-7xl mx-auto">
              {members.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  variants={cardAnimation}
                  className={`relative ${
                    isDarkMode ? "dark:bg-gray-900" : "bg-white"
                  } rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                >
                  <div
                    className={`relative h-full flex flex-col lg:flex-row ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      className="lg:w-1/2 relative overflow-hidden"
                      variants={imageAnimation}
                    >
                      <div className="w-full h-80 lg:h-full min-h-[400px] relative overflow-hidden">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>

                    {/* Text */}
                    <div className="lg:w-1/2 flex items-center p-8 lg:p-12">
                      <div className="space-y-6">
                        <motion.h3
                          className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-[#0747A1] transition-colors"
                          variants={textAnimation}
                        >
                          {leader.name}
                        </motion.h3>
                        <motion.p
                          className="text-lg text-[#D4AA49] font-semibold uppercase tracking-wider lg:hidden"
                          variants={textAnimation}
                        >
                          {leader.role}
                        </motion.p>
                        <motion.p
                          className="text-lg leading-relaxed"
                          variants={textAnimation}
                        >
                          {leader.description}
                        </motion.p>

                        {/* Contact */}
                        <motion.div
                          className="space-y-4 pt-6 border-t border-gray-200"
                          variants={textAnimation}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#0747A1] rounded-full flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
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
                            <a
                              href={`mailto:${leader.email}`}
                              className="text-sm text-gray-700 hover:text-[#0747A1]"
                            >
                              {leader.email}
                            </a>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#0747A1] rounded-full flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
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
                            <a
                              href={`tel:${leader.phone}`}
                              className="text-sm text-gray-700 hover:text-[#0747A1]"
                            >
                              {leader.phone}
                            </a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default LeadersGrid;
