import React from "react";
import Image from "next/image";
import Text from "../components/Text";
import Search from "../components/Search";
import Hero from "@/public/Images/Give.png";
import Sermons from "../components/Sermons";
import Sermon1 from "@/public/Images/Sermon1.png";
import Sermon2 from "@/public/Images/Sermon2.png";
import Sermon3 from "@/public/Images/Sermon3.png";
import Sermon4 from "@/public/Images/Sermon4.png";
import Sermon5 from "@/public/Images/Sermon5.png";
import Sermon6 from "@/public/Images/Sermon6.png";
import Sermon7 from "@/public/Images/Sermon7.png";
import Sermon8 from "@/public/Images/Sermon8.png";
import Sermon9 from "@/public/Images/Sermon9.png";

const page = () => {
  return (
    <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0 mx-auto">
      <div className=" grid grid-cols-1  py-10 lg:py-5 xl:pb-28 lg:grid-cols-2 gap-7">
        <div className="flex flex-col gap-4 justify-center ">
          <Text
            text="SERMONS THAT SPEAK TO THE SOUL"
            textClassName="text-[#0747A1]"
            lineClassName="bg-[#0747A1]"
          />
          <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
            Truth. Hope. Transformation.
          </h2>
          <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
            Dive into powerful messages rooted in faith and designed to uplift,
            challenge, and guide you in your spiritual journey. Whether you’re
            listening for the first time or returning for encouragement, each
            sermon is a step closer to understanding God’s word and His purpose
            for your life.
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

      <div className="py-5">
        <Search heading="Sermons" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pb-28 gap-4">
        <Sermons
          imageSrc={Sermon1}
          title="Evangelist Trymore Muparinga : Double portion"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
        <Sermons
          imageSrc={Sermon2}
          title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
        <Sermons
          imageSrc={Sermon3}
          title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
        <Sermons
          imageSrc={Sermon4}
          title="Evangelist Trymore Muparinga : Double portion"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
         <Sermons
          imageSrc={Sermon5}
          title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
        <Sermons
          imageSrc={Sermon6}
          title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
        <Sermons
          imageSrc={Sermon7}
          title="Evangelist Trymore Muparinga : Double portion"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
         <Sermons
          imageSrc={Sermon8}
          title="Pastor PD Chiweshe Sermon at AFM Kepton Park South Africa"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
        <Sermons
          imageSrc={Sermon9}
          title="Calling with purpose(Part3) || Bishop Peter Gatimu || 2025 Teachings"
          speaker="AFM FOUNTAIN OF GRACE ASSEMBLY"
          views="27K"
          timeAgo="1 months ago"
        />
      </div>
    </div>
  );
};

export default page;
