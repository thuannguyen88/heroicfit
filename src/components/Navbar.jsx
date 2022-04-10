import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div>BRAND.</div>
      </div>
      <MenuIcon className="w-5" />
    </div>
  );
}
