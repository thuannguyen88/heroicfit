import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [menuClose, setMenuClose] = useState(true);
  const handleClick = () => {
    setMenuClose(!menuClose);
  };

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg bg-white">
      <div className="flex items-center max-w-[1240px] h-full mx-auto justify-between px-10">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-3xl">
            HEROIC<span className="text-sky-500">FIT</span>
          </h1>
          <ul className="hidden md:flex font-normal text-slate-600">
            <li>Home</li>
            <li>About</li>
            <li>Free Stuff</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          {/* <button className="border-none bg-transparent text-slate-600 font-normal mr-4">
            Log In
          </button> */}
          <button className="px-4 py-2 font-normal">Get Started</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {menuClose ? (
            <MenuIcon className="w-12" />
          ) : (
            <XIcon className="w-6" />
          )}
          {/* // <MenuIcon className="w-12" /> */}
        </div>
      </div>

      <ul className={menuClose ? "hidden" : "absolute w-full px-8 bg-zinc-200"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Free Stuff</li>

        <div className="flex flex-col my-2">
          <button className="bg-transparent text-sky-500 px-4 py-2 my-5">
            Sign In
          </button>
          <button className="px-4 py-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
