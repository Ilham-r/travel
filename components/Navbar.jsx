import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="flex w-full pt-2 px-20 justify-between items-center">
      <div className="log">
        <img src="/images/Logo.png" alt="logo" />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <a href="/">Login</a>
        <Button title="Sign up" color={true} />
      </div>
    </header>
  );
};

export default Navbar;
