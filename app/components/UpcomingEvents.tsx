// import React from "react";
// import Image from "next/image";
// import Upcoming from "@/public/Images/Upcoming1.svg";

// const UpcomingEvents = () => {
//   return (
//     <div className="flex flex-col gap-2 mb-5 shadow-md">
//       <Image src={Upcoming} alt="" />
//       <div className="px-3 py-2 pb-4">
//         <h2 className="font-semibold text-[21px] xl:text-[18px] text-[#434147]">
//           {" "}
//           April 2025
//         </h2>
//         <div className="flex gap-4 py-2">
//           <div className="flex flex-col  justify-center items-center text-[#4341473D]">
//             <p>mon</p>
//             <p>2</p>
//           </div>
//           <div className="flex flex-col justify-center items-center text-[#4341473D]">
//             <p>tue</p>
//             <p>3</p>
//           </div>
//           <div className="flex flex-col justify-center items-center text-[#4341473D]">
//             <p>wed</p>
//             <p>4</p>
//           </div>
//           <div className="flex flex-col bg-[#0747A1] rounded-xl py-[2px] px-2 justify-center items-center text-white">
//             <p>thu</p>
//             <p>5</p>
//           </div>
//           <div className="flex flex-col justify-center items-center text-[#4341473D]">
//             <p>fri</p>
//             <p>6</p>
//           </div>
//           <div className="flex flex-col justify-center items-center text-[#4341473D]">
//             <p>sat</p>
//             <p>7</p>
//           </div>
//           <div className="flex flex-col justify-center items-center text-[#4341473D]">
//             <p>sun</p>
//             <p>8</p>
//           </div>
//         </div>
//         <h2 className="font-semibold font-sans text-[20px] pb-2 xl:text-[18px] text-[#151411]">
//           Only worship Thursday
//         </h2>
//         <p className="text-[#AFADB5] xl:text-[15px]">
//           Come Join Us lift the name of the Lord
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;


import React from "react";
import Image, { StaticImageData } from "next/image";

interface UpcomingEventsProps {
  imageSrc: StaticImageData;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col gap-2 mb-5 shadow-md">
      <Image src={imageSrc} alt="Upcoming event" />
      <div className="px-3 py-2 pb-4">
        <h2 className="font-semibold text-[21px] xl:text-[18px] text-[#434147]">
          April 2025
        </h2>
        <div className="flex gap-4 py-2">
          <div className="flex flex-col justify-center items-center text-[#4341473D]">
            <p>mon</p>
            <p>2</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#4341473D]">
            <p>tue</p>
            <p>3</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#4341473D]">
            <p>wed</p>
            <p>4</p>
          </div>
          <div className="flex flex-col bg-[#0747A1] rounded-xl py-[2px] px-2 justify-center items-center text-white">
            <p>thu</p>
            <p>5</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#4341473D]">
            <p>fri</p>
            <p>6</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#4341473D]">
            <p>sat</p>
            <p>7</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[#4341473D]">
            <p>sun</p>
            <p>8</p>
          </div>
        </div>
        <h2 className="font-semibold font-sans text-[20px] pb-2 xl:text-[18px] text-[#151411]">
          Only worship Thursday
        </h2>
        <p className="text-[#AFADB5] xl:text-[15px]">
          Come Join Us lift the name of the Lord
        </p>
      </div>
    </div>
  );
};

export default UpcomingEvents;