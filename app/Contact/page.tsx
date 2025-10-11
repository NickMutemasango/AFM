import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import Hero from "@/public/Images/Contact.png";
import Call from "@/public/Images/Call.svg";
import Email from "@/public/Images/Email.svg";
import Location from "@/public/Images/Location.svg";
import Instagram from "@/public/Images/Instagram.svg";
import Twitter from "@/public/Images/Twitter.svg";
import Facebook from "@/public/Images/Facebook.svg";
import ContactInput from "../components/ContactInputs";
import Bluetick from "@/public/Images/Tick.svg";
import Tick from "@/public/Images/Tick.png";

const page = () => {
  return (
    <div className="xl:max-w-5xl   lg:max-w-4xl px-3 md:px-6 lg:px-0  mx-auto">
      <div className=" grid grid-cols-1  py-10 lg:py-5 lg:grid-cols-2 gap-7 mb-20">
        <div className="flex flex-col gap-4 justify-center ">
          <Text
            text="Reach Out. Connect. Visit."
            textClassName="text-blue-600"
            lineClassName="bg-blue-600"
          />
          <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
            We’d Love to Hear From You
          </h2>
          <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
            Whether you have questions, need prayer, or want to learn more about
          our ministry, we&apos;re here for you. Feel free to get in touch, stop by
            during one of our services, or follow us online. Let’s walk this
            journey of faith together.
          </p>
          <div>
            <button className="bg-[#0747A1] cursor-pointer text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pb-10 xl:pb-20">
        <div className="bg-[#0747A1] lg:w-[45%] xl:w-[37%] text-white py-8 px-4 rounded-md">
          <div>
            <h2 className="text-2xl font-semibold pb-2">Contact Information</h2>
            <p className="text-[#C9C9C9] pb-10 text-[14px] lg:text-[13px] xl:text-[15px]">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex flex-col justify-center pb-14">
            <div className="flex pb-7  items-center gap-3">
              <Image src={Call} alt="" />
              <p className="text-[14px] lg:text-[13px] xl:text-[15px]">+263 123 456 789</p>
            </div>
            <div className="flex pb-7  items-center gap-3">
              <Image src={Email} alt="" />
              <p className="text-[14px] lg:text-[13px] xl:text-[15px]">demo@gmail.com</p>
            </div>
            <div className="flex pb-7 items-center gap-3">
              {" "}
              <Image src={Location} alt="" />
              <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <Image src={Twitter} alt="" />
            <Image src={Instagram} alt="" />
            <Image src={Facebook} alt="" />
          </div>
        </div>
        <div>
          <div className="pb-5">
            <ContactInput />
          </div>
          <h4 className="font-semibold text-[15px] pb-3">Select Subject?</h4>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 pb-10">
            <div className="flex items-center gap-2">
              <Image src={Bluetick} alt="" className="w-4 h-4" />
              <p className="text-sm text-[#0747A1]">General Inquiry</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Tick} alt="" className="w-4 h-4" />
              <p className="text-sm">General Inquiry</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Tick} alt="" className="w-4 h-4" />
              <p className="text-sm">General Inquiry</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Tick} alt="" className="w-4 h-4" />
              <p className="text-sm">General Inquiry</p>
            </div>
          </div>
          <div className="pb-16">
            <p className="text-[#434147] text-[14px] pb-2">Message</p>
            <input
              type="text"
              placeholder="Write your message here "
              className="text-[#999999] text-[14px] pb-3 outline-0"
            />
            <hr className="text-[#EBEBEB] " />
          </div>
          <button className="w-[35%] md:w-[20%] cursor-pointer lg:w-[35%] text-sm text-white py-3 bg-[#0747A1] rounded-3xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

