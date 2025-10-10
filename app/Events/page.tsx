

import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "../../public/Images/Event.png";
import Aesthetic from "@/public/Images/Aesthetic.svg";
import Search from "../components/Search";
import Product from "../components/Product";
import Product1 from '@/public/Images/Product1.png'
import Product3 from '@/public/Images/Product3.png'
import Product4 from '@/public/Images/Product4.png'
import Product5 from '@/public/Images/Product5.png'
import Product6 from '@/public/Images/Product6.png'
import Product7 from '@/public/Images/Product7.png'
import Product8 from '@/public/Images/Product8.png'
import Product9 from '@/public/Images/Product9.png'
import Product2 from '@/public/Images/Product.png'

const page = () => {
  return (
    <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto">
      <div className=" grid grid-cols-1 px-3 md:px-6 lg:px-0 py-10  lg:py-5 lg:grid-cols-2 gap-7">
        <div className="flex flex-col gap-4 justify-center ">
          <Text
            text="FAITH-INSPIRED PRODUCTS"
            textClassName="text-[#0747A1]"
            lineClassName="bg-[#0747A1]"
          />
          <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px] ">
            Shop with Purpose, Wear Your Faith
          </h2>
          <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
            Discover meaningful merchandise that reflects your beliefs and
            supports our mission. Every purchase goes toward building a stronger
            community and spreading the message of hope and love.
          </p>
          <div>
            <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
        </div>
      </div>

      <div className="flex flex-col lg:justify-center lg:items-center lg:flex-row gap-5 py-20">
        <Image src={Aesthetic} alt="" className="w-full lg:w-[50%]" />
        <div className="flex flex-col gap-3">
          <h2 className="text-[#434147] font-semibold text-2xl pt-3">
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
        <Product
          imageSrc={Product1.src}
          category="Diary"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product2.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product3.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product4.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product5.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product6.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product7.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product8.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        <Product
          imageSrc={Product9.src}
          category="Books"
          title="Hardcover Notebook"
          description="Premium leather cover with 200 pages"
          price="$29.99"
          imageAlt="Hardcover notebook"
        />
        
      </div>
    </div>
  );
};

export default page;
