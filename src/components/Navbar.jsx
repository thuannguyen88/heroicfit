import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HEROICFIT.</h1>
          <ul className="hidden md:flex ">
            <li>home</li>
            <li>about</li>
            <li>support</li>
            <li>platforms</li>
            <li>pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-4 py-2">Sign Up</button>
        </div>
        <div className="md:hidden">
          <MenuIcon className="w-12" />
        </div>
      </div>

      <ul className="absolute w-full px-8 bg-zinc-200">
        <li className>home</li>
        <li className>about</li>
        <li className>support</li>
        <li className>platforms</li>
        <li className>pricing</li>
      </ul>
    </div>
  );
}
