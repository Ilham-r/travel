"use client";
import { useState } from "react";

import ResultCard from "@/components/ResultCard";
import Searchbar from "./sections/Searchbar";
import SideBar from "./sections/SideBar";

const SearchPage = () => {
  return (
    <div className="w-full h-screen flex-col flex mt-10 mb-48 justify-start px-20">
      <Searchbar />
      <div className="grid grid-cols-[280px_1fr] py-7">
        {/* Sidebar - Filters */}
        <SideBar />
        {/* Search Results */}
        <div className="flex flex-col flex-1 items-start pl-7 gap-5 text-blackgreen font-montserrat">
          <div className="flex w-full bg-white shadow-lg justify-between items-center p-4">
            {/* Hotel, Motel, Resort buttons */}
            <button className="flex flex-1 flex-col items-start border-r-[1px] cursor-pointer duration-300 ease-linear focus:border-b-4 focus:border-b-mintgreen">
              <p className="text-base font-semibold">Hotels</p>
              <p className="opacity-40">200</p>
            </button>
            <button className="flex flex-1 flex-col items-start pl-2 border-r-[1px] cursor-pointer duration-300 ease-linear focus:border-b-4 focus:border-b-mintgreen">
              <p className="text-base font-semibold">Motels</p>
              <p className="opacity-40">200</p>
            </button>
            <button className="flex flex-1 flex-col items-start pl-2 cursor-pointer duration-300 ease-linear focus:border-b-4 focus:border-b-mintgreen">
              <p className="text-base font-semibold">Resorts</p>
              <p className="opacity-40">200</p>
            </button>
          </div>

          <p className="text-sm font-semibold">
            Showing 4 of <span className="text-salmon">400</span>
          </p>

          {/* Result list */}
          <div className="flex flex-col gap-6">
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
