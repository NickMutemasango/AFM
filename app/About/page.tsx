import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "../../public/Images/About.png";
import About from "../../public/Images/About AFM.svg";
import Vision from "../../public/Images/Vision.svg";
import Ab1 from "../../public/Images/Ab1.svg";
import Ab2 from "../../public/Images/Ab2.png";
import Ab3 from "../../public/Images/Ab3.svg";
import Mission from "../../public/Images/Mission.png"
import Motto from "../../public/Images/Moto.png";
import Values from "../../public/Images/Values.png";

const page = () => {
  return (
    <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto">
      <div className=" grid grid-cols-1  py-10 lg:py-5 lg:grid-cols-2 gap-7">
        <div className="flex flex-col gap-4 justify-center ">
          <Text
            text="WHAT WE BELIEVE AND WHO WE ARE"
            textClassName="text-[#C83E30]"
            lineClassName="bg-[#C83E30]"
          />
          <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
            Together in faith, moving forward with purpose
          </h2>
          <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </p>
          <div>
            <button className="border border-[#0747A1] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] hover:text-white transition-colors duration-200 font-medium">
              Sermons
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
        </div>
      </div>

      {/* About */}
      <div className=" py-5 lg:py-16 flex flex-col gap-7 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-3 pb-3">
          <h2 className="font-semibold text-2xl pb-3">About AFM Dallas</h2>
          <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed. Lorem ipsum dolor sit amet consectetur
            adipiscing elit dolor posuere vel venenatis eu sit massa volutpat
            massa rhoncus.
          </p>
          <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed. Lorem ipsum dolor{" "}
          </p>
          <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </p>
          <p className="text-[14px] lg:text-[13px] xl:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed. Lorem ipsum dolor sit amet consectetur
            adipiscing elit dolor posuere vel venenatis eu s
          </p>
        </div>
        <Image src={About} alt="" className="w-full lg:w-[40%] xl:w-[43%]" />
      </div>

      <div className=" py-10 flex flex-col-reverse  gap-7 xl:gap-16 lg:flex-row">
        <div className="flex flex-col gap-3">
          <Image src={Ab1} alt="" className="w-full" />
          <Image src={Ab2} alt="" className="w-full -mt-[20%]" />
          <Image src={Ab3} alt="" className="w-full" />
        </div>
        <div className="flex flex-col lg:w-[60%]">
          <div className="flex flex-col gap-3 py-3 ">
            <Image src={Mission} alt="" />
            <h4 className="font-semibold">Our Mission</h4>
            <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus.
            </p>
          </div>
          <div className="flex flex-col gap-3 py-3 ">
            <Image src={Vision} alt="" />
            <h4 className="font-semibold">Our Vision</h4>
            <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus.
            </p>
          </div>
          <div className="flex flex-col gap-3 py-3 ">
            <Image src={Motto} alt="" />
            <h4 className="font-semibold">Our Motto</h4>
            <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus.
            </p>
          </div>
          <div className="flex flex-col gap-3 py-3 ">
            <Image src={Values} alt="" />
            <h4 className="font-semibold">Our Values</h4>
            <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
