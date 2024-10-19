import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div className="  group relative block w-60 h-80 overflow-hidden rounded-2xl max-md:w-full max-md:h-96">
      <img
        src="/images/paris.jpg"
        alt="paris"
        className="w-full h-full object-cover duration-500 ease-in-out group-hover:scale-125"
      />
      <div className="flex inset-0 absolute flex-col justify-end ">
        <div class="px-4 grid grid-cols-[1fr_65px] text-white gap-x-4 items-end">
          <div>
            <h2 class="text-xl font-bold">Melbourne</h2>
            <p class="text-sm">An amazing journey</p>
          </div>

          <div class="text-right">
            <p class="text-xl font-bold">$ 700</p>
          </div>
        </div>

        <div class="p-4">
          <Button title="Book a hotel" color={true} />
        </div>
      </div>
    </div>
  );
};

export default Card;
