import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  const handleClick = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HEROICFIT.</h1>
          <ul className="hidden md:flex ">
            <li>Free Resources</li>
            <li>Meal Plans</li>
            <li>Online Training</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-4 py-2">Join Now</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {navMenu ? <MenuIcon className="w-12" /> : <XIcon className="w-6" />}
          {/* // <MenuIcon className="w-12" /> */}
        </div>
      </div>

      <ul className={navMenu ? "hidden" : "absolute w-full px-8 bg-zinc-200"}>
        <li className="border-b-2 border-zinc-300 w-full">home</li>
        <li className="border-b-2 border-zinc-300 w-full">about</li>
        <li className="border-b-2 border-zinc-300 w-full">support</li>
        <li className="border-b-2 border-zinc-300 w-full">platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">pricing</li>
        <div className="flex flex-col my-2">
          <button className="bg-transparent text-indigo-600 px-4 py-2 my-5">
            Sign In
          </button>
          <button className="px-4 py-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
