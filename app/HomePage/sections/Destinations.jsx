import Card from "@/components/Card";
import React from "react";

const Destinations = () => {
  return (
    <div className="flex flex-col px-20 gap-3 py-20 max-md:px-10 ">
      <div className="flex w-full justify-between items-center">
        <div className=" flex flex-col pr-20 justify-start items-start">
          <p className="text-h2 ">Fall into travel</p>

          <p>
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div className="p-2 border-2 w-20 border-mintgreen cursor-pointer duration-500 hover:bg-mintgreen hover:text-white ">
          See All
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 flex-wrap ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Destinations;
