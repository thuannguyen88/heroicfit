import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto mt-20">
        <div className="flex flex-col justify-center md:items-start w-full px-8 py-8">
          <p className="text-4xl">online fitness training</p>
          <h1 className="py-3 text-6xl md:text-7xl font-bold">
            a no-bs approach to building your fitness
          </h1>
          <p className="text-1xl">
            transform your physique with or without a gym membership
          </p>
          <button className="py-4 px-7 w-[40%] md:w-[60%] my-6">
            Get Started
          </button>
        </div>
        <div>
          <img src={bgImg} alt="hero_image" className="w-full" />
        </div>
        
      </div>
    </div>
  );
}
