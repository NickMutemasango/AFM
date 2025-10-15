// import React from "react";
// import Text from "../components/Text";
// import Image from "next/image";
// import Hero from "@/public/Images/Shop.png";
// import PersonalInfo from "../components/PersonalInfo";
// import FormSubmission from "../components/FormSubmission";

// const page = () => {
//   return (
//     <div className="xl:max-w-5xl px-3 md:px-6 lg:px-0  lg:max-w-4xl  mx-auto flex flex-col items-center">
//       <div className=" grid grid-cols-1  py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
//         <div className="flex flex-col gap-4 justify-center ">
//           <Text
//             text="Giving Is Sowing into God's Kingdom"
//             textClassName="text-[#0747A1]"
//             lineClassName="bg-[#0747A1]"
//           />
//           <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//             A vibrant and spirit-filled church community
//           </h2>
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Contact Us
//             </button>
//             <button className="border border-[#0747A1] hover:text-white text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//               Sermons
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//         </div>
//       </div>

//       <div className="pt-8 shadow-md rounded-md md:px-6 lg:w-[80%] mb-10">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           <PersonalInfo
//             title="Contact"
//             subtitle="Information"
//             barColor="bg-[#EBEBEB]"
//             height="h-2"
//           />
//           <PersonalInfo
//             title="Personal"
//             subtitle="Information"
//             barColor="bg-[#0747A1]"
//             height="h-2"
//             Curve="rounded-l-md"
//           />
//           <PersonalInfo
//             title="Payment"
//             subtitle="Method"
//             barColor="bg-[#EBEBEB]"
//             height="h-2"
//           />
//           <PersonalInfo
//             title="Payment"
//             subtitle="Information"
//             barColor="bg-[#EBEBEB]"
//             height="h-2"
//             Curve="rounded-l-md"
//           />
//         </div>
//         <h2 className="py-8 text-2xl font-semibold">Personal Information</h2>

//         <FormSubmission />

//         <div className="flex justify-center pt-10 pb-4 text-[#313131]">
//           <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//            Stuck on the form?<span className="underline cursor-pointer">Let&apos;s call you</span>
//           </p>
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
import Hero from "../../public/Images/Event.png";
import Aesthetic from "@/public/Images/Aesthetic.svg";
import Search from "../components/Search";
import Product from "../components/Product";
import Product1 from "@/public/Images/Product1.png";
import Product3 from "@/public/Images/Product3.png";
import Product4 from "@/public/Images/Product4.png";
import Product5 from "@/public/Images/Product5.png";
import Product6 from "@/public/Images/Product6.png";
import Product7 from "@/public/Images/Product7.png";
import Product8 from "@/public/Images/Product8.png";
import Product9 from "@/public/Images/Product9.png";
import Product2 from "@/public/Images/Product.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  staggerContainer,
  slideFromLeft,
  slideFromRight,
} from "@/variants";

const Page = () => {
  const heroRef = useRef(null);

  // Check if elements are in view - only keeping the ones you actually use
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={heroRef}
      className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto"
    >
      <div className=" grid grid-cols-1 px-3 md:px-6 lg:px-0 py-10  lg:py-5 lg:grid-cols-2 gap-7">
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-4 justify-center "
        >
          <motion.div variants={slideFromLeft}>
            <Text
              text="FAITH-INSPIRED PRODUCTS"
              textClassName="text-[#0747A1]"
              lineClassName="bg-[#0747A1]"
            />
          </motion.div>
          <motion.h2
            variants={slideFromLeft}
            transition={{ delay: 0.1 }}
            className="text-[#434147] font-semibold text-[30px] xl:text-[40px] "
          >
            Shop with Purpose, Wear Your Faith
          </motion.h2>
          <motion.p
            variants={slideFromLeft}
            transition={{ delay: 0.2 }}
            className="text-[14px] lg:text-[13px] xl:text-[15px]"
          >
            Discover meaningful merchandise that reflects your beliefs and
            supports our mission. Every purchase goes toward building a stronger
            community and spreading the message of hope and love.
          </motion.p>
          <motion.div variants={slideFromLeft} transition={{ delay: 0.3 }}>
            <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
              Contact Us
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

      <div className="flex flex-col lg:justify-center lg:items-center lg:flex-row gap-5 py-20">
        <Image src={Aesthetic} alt="" className="w-full lg:w-[50%]" />
        <div className="flex flex-col gap-3">
          <h2 className="text-[#434147] font-semibold text-2xl xl:text-3xl pt-3">
            White Aesthetic T-shirt
          </h2>
          <p className="text-[#AFADB5]">Combination of poly and wool</p>
          <h4 className="font-semibold text-sm">Color</h4>
          <div className="flex">
            <div className="w-8 h-8 bg-[#151411]"></div>
            <div className="w-8 h-8 bg-[#0747A1]"></div>
            <div className="w-8 h-8 bg-[#C83E30]"></div>
            <div className="w-8 h-8 bg-[#D8DBE0]"></div>
          </div>
          <div>
            <p className="text-[#AFADB5]">
              Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
              facilisis facilisis ligula felis et a parturient aenean. Ac
              maecenas ultricies felis risus scelerisque duis posuere...{" "}
              <span className="text-[#0747A1]">Read More</span>
            </p>
          </div>
          <h2 className="text-[#151411] font-bold text-2xl py-2">$99.98</h2>
          <div className="flex gap-5">
            <button className="bg-[#0747A1] rounded-full text-white py-2 w-[50%] md:w-[30%] xl:w-[40%]">
              Buy now
            </button>
            <button className="border rounded-full text-[#0747A1] py-2 border-[#0747A1] w-[45%] md:w-[30%] xl:w-[40%]">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="py-5">
        <Search heading="Total Product" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 py-10 lg:grid-cols-3 lg:gap-6  xl:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product1.src}
            category="Diary"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product2.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product3.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product4.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product5.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product6.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product7.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product8.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Product
            imageSrc={Product9.src}
            category="Books"
            title="Hardcover Notebook"
            description="Premium leather cover with 200 pages"
            price="$29.99"
            imageAlt="Hardcover notebook"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
