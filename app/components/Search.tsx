import React from "react";
import Image from "next/image";
import Searche from "@/public/Images/search-normal.svg";
import Filter from "@/public/Images/filter.svg";
import Sort from '@/public/Images/sort.svg'

interface SearchProps {
  heading: string;
}

const Search: React.FC<SearchProps> = ({ heading }) => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="flex gap-3 pb-10 justify-between">
        <div className="bg-gray-50 flex gap-2 items-center py-2 md:py-3 pl-5 rounded-[6px] w-[100%]">
          <Image src={Searche} alt="" className="w-[10%] md:w-[5%] xl:w-[2%]" />
          <p>Search Item</p>
        </div>
        <div className="flex gap-1 justify-center items-center bg-gray-50 rounded-[6px] py-2 px-4 md:px-3">
          <Image src={Filter} alt="" className="w-[30%]" />
          <p>Filter</p>
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <div className="flex justify-center items-center gap-4">
          <h2 className="font-semibold text-2xl xl:text-[28px]">{heading}</h2>
          <div className="bg-gray-100 rounded-md flex justify-center items-center px-2">
            <p className="text-[#518581] font-semibold text-sm">184</p>
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center bg-gray-50 rounded-md py-2 px-2 xl:px-2 md:px-10 md:rounded-[3px]">
          <Image src={Sort} alt="" className="w-[20%]" />
          <p className="text-sm">Sort by</p>
        </div>
      </div>
    </div>
  );
};

export default Search;