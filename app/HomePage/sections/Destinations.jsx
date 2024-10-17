import Card from "@/components/Card";
import React from "react";

const Destinations = () => {
  return (
    <div className="flex flex-col px-20 gap-3 py-6">
      <p className="text-h2">Fall into travel</p>
      <p>
        Going somewhere to celebrate this season? Whether you’re going home or
        somewhere to roam, we’ve got the travel tools to get you to your
        destination.
      </p>
      <div className="flex justify-between items-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Destinations;
