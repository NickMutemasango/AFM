// import Image from "next/image";
// import Text from "./components/Text";
// import Hero from "../public/Images/Home.png";
// import Video from "../public/Images/Video.svg";
// import About from "../public/Images/About.svg";
// import Vision from "../public/Images/Vision.svg";
// import Mission from "../public/Images/Mission.png";
// import Values from "../public/Images/Values.png";
// import Motto from "../public/Images/Moto.png";
// import Events from "./components/Events";
// import HomeBackground from "../public/Images/Help.svg";

// export default function Home() {
//   return (
//     <div>
//       <div className="xl:max-w-5xl   lg:max-w-4xl  mx-auto">
//         <div className=" grid grid-cols-1 px-3 md:px-6 lg:px-0 py-10 lg:py-5 lg:grid-cols-2 gap-7">
//           <div className="flex flex-col gap-4 justify-center ">
//             <Text
//               text="APOSTOLIC FAITH MISSION DALLAS"
//               textClassName="text-[#D4AA49]"
//               lineClassName="bg-[#D4AA49]"
//             />
//             <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px]">
//               A vibrant and spirit-filled church community
//             </h2>
//             <p className="text-[#434147]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus, elit massa sed.
//             </p>
//             <div className="flex gap-4">
//               <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 text-[15px]">
//                 Contact Us
//               </button>
//               <button className="border-[2px] border-[#0747A1] text-[15px] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-colors duration-200 font-medium">
//                 Sermons
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <Image src={Hero} alt="" className="w-[100%] xl:w-[90%]" />
//           </div>
//         </div>

//         {/* Video section */}
//         <div className="py-5 pb-10 md:pb-14 md:py-7 md:pt-16 lg:py-10 xl:py-16 px-3 md:px-6 lg:px-0">
//           <Image src={Video} alt="" />
//         </div>

//         {/* About section */}
//         <div className="py-5 xl:pt-28 flex flex-col gap-6 lg:flex-row lg:justify-center items-center px-3 md:px-6 lg:px-0">
//           <div className="flex flex-col gap-7 lg:gap-5 lg:w-3/4 ">
//             <h2 className="font-semibold text-2xl">About AFM Dallas</h2>
//             <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus, elit massa sed. Lorem ipsum dolor sit amet
//               consectetur adipiscing elit dolor posuere vel venenatis eu sit
//               massa volutpat massa rhoncus.
//             </p>
//             <div className="py-5 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Vision} alt="" />
//                 <h4 className="font-semibold">Our Vision</h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Mission} alt="" />
//                 <h4 className="font-semibold">Our Mission</h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Values} alt="" />
//                 <h4 className="font-semibold">Our Values </h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-3 py-3 lg:py-0 ">
//                 <Image src={Motto} alt="" className="xl:w-[12%]" />
//                 <h4 className="font-semibold">Our Motto</h4>
//                 <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//                   posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//                   feugiat tellus.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="py-5 ">
//             <Image src={About} alt="" className="" />
//           </div>
//         </div>

//         {/* Events section */}
//         <div className="flex flex-col gap-5 py-6 px-3 md:py-20 md:px-6 lg:px-0">
//           <h2 className="font-semibold text-2xl">Events</h2>
//           <p className="w-full lg:w-[50%] text-[14px] lg:text-[13px] xl:text-[15px] pb-5">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
//             vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
//             tellus, elit massa sed.{" "}
//           </p>

//           <div className="bg-[#055594] text-white px-3 py-8   rounded-md">
//             <h2 className="tracking-wider pb-6 text-[20px] md:text-[24px]">
//               Upcoming Events
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-5 pb-2 md:pb-4">
//               <Events />
//               <Events />
//               <Events />
//               <Events />
//             </div>
//             <button className="cursor-pointer">See all events</button>
//           </div>
//         </div>
//       </div>
//       <div className="py-11 xl:pb-28">
//         {/* <Image src={Help} alt="" /> */}
//         <div
//           className="text-white flex flex-col justify-center w-full py-8 md:py-36 xl:py-40 items-center relative"
//           style={{
//             backgroundImage: `url(${HomeBackground.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50"></div>

//           <div className="relative flex flex-col justify-center items-center px-3 z-10">
//             <p className="pb-4  text-[14px] lg:text-[13px] xl:text-[15px]">Support the work of God</p>
//             <h2 className="font-medium text-[20px] md:text-2xl text-center w-[70%] pb-3 md:w-[50%] lg:w-[35%]">
//               Help us Raise In-order to raise those in-need
//             </h2>
//             <p className="text-sm  text-center text-[14px] lg:text-[13px] xl:text-[15px] pb-3 w-full md:w-[50%] lg:w-[35%]">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
//               posuere vel venenatis eu sit massa volutpat massa rhoncus odio
//               feugiat tellus, elit massa sed.{" "}
//             </p>
//             <button className="bg-[#0747A1] w-[60%] md:w-[30%] py-2 rounded-full">
//               Give now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import Text from "./components/Text";
import Hero from "../public/Images/Home.png";
import Video from "../public/Images/Video.svg";
import About from "../public/Images/About.svg";
import Vision from "../public/Images/Vision.svg";
import Mission from "../public/Images/Mission.png";
import Values from "../public/Images/Values.png";
import Motto from "../public/Images/Moto.png";
import Events from "./components/Events";
import HomeBackground from "../public/Images/Help.svg";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="xl:max-w-5xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 px-3 md:px-6 lg:px-0 py-10 lg:py-5 lg:grid-cols-2 gap-7">
          <div className="flex flex-col gap-4 justify-center">
            <div className="animate-fade-in-up">
              <Text
                text="APOSTOLIC FAITH MISSION DALLAS"
                textClassName="text-[#D4AA49]"
                lineClassName="bg-[#D4AA49]"
              />
            </div>
            <h2 className="text-[#434147] font-semibold text-[30px] xl:text-[40px] animate-fade-in-up animation-delay-200">
              A vibrant and spirit-filled church community
            </h2>
            <p className="text-[#434147] animate-fade-in-up animation-delay-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed.
            </p>
            <div className="flex gap-4 animate-fade-in-up animation-delay-400">
              <button className="bg-[#0747A1] text-white px-4 py-2 rounded-3xl hover:bg-[#063a87] transition-all duration-300 ease-out hover:scale-105 transform text-[15px]">
                Contact Us
              </button>
              <button className="border-[2px] border-[#0747A1] text-[15px] text-[#0747A1] px-4 py-2 rounded-3xl hover:bg-[#063a87] hover:text-white transition-all duration-300 ease-out hover:scale-105 transform font-medium">
                Sermons
              </button>
            </div>
          </div>
          <div className="flex justify-end animate-fade-in-left">
            <Image 
              src={Hero} 
              alt="" 
              className="w-[100%] xl:w-[90%] transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>

        {/* Video section */}
        <div className="py-5 pb-10 md:pb-14 md:py-7 md:pt-16 lg:py-10 xl:py-16 px-3 md:px-6 lg:px-0 animate-fade-in">
          <Image 
            src={Video} 
            alt="" 
            className="transition-all duration-500 hover:scale-[1.02] transform"
          />
        </div>

        {/* About section */}
        <div className="py-5 xl:pt-28 flex flex-col gap-6 lg:flex-row lg:justify-center items-center px-3 md:px-6 lg:px-0">
          <div className="flex flex-col gap-7 lg:gap-5 lg:w-3/4 animate-fade-in-right">
            <h2 className="font-semibold text-2xl">About AFM Dallas</h2>
            <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed. Lorem ipsum dolor sit amet
              consectetur adipiscing elit dolor posuere vel venenatis eu sit
              massa volutpat massa rhoncus.
            </p>
            <div className="py-5 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
              <div className="flex flex-col gap-3 py-3 lg:py-0 transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
                <Image src={Vision} alt="" className="transition-transform duration-300 hover:scale-110" />
                <h4 className="font-semibold">Our Vision</h4>
                <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                  feugiat tellus.
                </p>
              </div>
              <div className="flex flex-col gap-3 py-3 lg:py-0 transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
                <Image src={Mission} alt="" className="transition-transform duration-300 hover:scale-110" />
                <h4 className="font-semibold">Our Mission</h4>
                <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                  feugiat tellus.
                </p>
              </div>
              <div className="flex flex-col gap-3 py-3 lg:py-0 transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
                <Image src={Values} alt="" className="transition-transform duration-300 hover:scale-110" />
                <h4 className="font-semibold">Our Values </h4>
                <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                  feugiat tellus.
                </p>
              </div>
              <div className="flex flex-col gap-3 py-3 lg:py-0 transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
                <Image src={Motto} alt="" className="xl:w-[12%] transition-transform duration-300 hover:scale-110" />
                <h4 className="font-semibold">Our Motto</h4>
                <p className="text-[14px] lg:text-[13px] xl:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                  feugiat tellus.
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 animate-fade-in-left">
            <Image 
              src={About} 
              alt="" 
              className="transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>

        {/* Events section */}
        <div className="flex flex-col gap-5 py-6 px-3 md:py-20 md:px-6 lg:px-0 animate-fade-in-up">
          <h2 className="font-semibold text-2xl">Events</h2>
          <p className="w-full lg:w-[50%] text-[14px] lg:text-[13px] xl:text-[15px] pb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.{" "}
          </p>

          <div className="bg-[#055594] text-white px-3 py-8 rounded-md transition-all duration-500 hover:shadow-2xl">
            <h2 className="tracking-wider pb-6 text-[20px] md:text-[24px]">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-5 pb-2 md:pb-4">
              <Events />
              <Events />
              <Events />
              <Events />
            </div>
            <button className="cursor-pointer transition-all duration-300 hover:scale-105 hover:underline">
              See all events
            </button>
          </div>
        </div>
      </div>
      
      {/* Donation Section */}
      <div className="py-11 xl:pb-28">
        <div
          className="text-white flex flex-col justify-center w-full py-8 md:py-36 xl:py-40 items-center relative animate-fade-in"
          style={{
            backgroundImage: `url(${HomeBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50 transition-all duration-500 hover:bg-black/60"></div>

          <div className="relative flex flex-col justify-center items-center px-3 z-10 animate-fade-in-up">
            <p className="pb-4 text-[14px] lg:text-[13px] xl:text-[15px]">Support the work of God</p>
            <h2 className="font-medium text-[20px] md:text-2xl text-center w-[70%] pb-3 md:w-[50%] lg:w-[35%]">
              Help us Raise In-order to raise those in-need
            </h2>
            <p className="text-sm text-center text-[14px] lg:text-[13px] xl:text-[15px] pb-3 w-full md:w-[50%] lg:w-[35%]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              posuere vel venenatis eu sit massa volutpat massa rhoncus odio
              feugiat tellus, elit massa sed.{" "}
            </p>
            <button className="bg-[#0747A1] w-[60%] md:w-[30%] py-2 rounded-full transition-all duration-300 hover:bg-[#063a87] hover:scale-105 transform">
              Give now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}