import React from "react";

const Button = ({ title, color }) => {
  return (
    <div
      className={` flex px-3 py-2 items-center rounded-lg justify-center cursor-pointer ${
        color ? "bg-mintgreen text-blackgreen" : "bg-blackgreen text-white"
      }`}
    >
      {title}
    </div>
  );
};

export default Button;
