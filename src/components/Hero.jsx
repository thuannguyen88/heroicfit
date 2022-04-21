import React from "react";

import bgImg from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <div className="w-full h-screen  flex flex-col justify-between px-8">
      <div className="flex flex-row max-w-[1240px] m-auto ">
        <div className="flex flex-col justify-center   py-8">
          <p className="text-4xl">online fitness training</p>
          <h1 className="py-3 text-6xl md:text-7xl font-bold">
            a no-bs approach to building your fitness
          </h1>
          <p className="text-1xl">
            transform your physique with or without a gym membership
          </p>
          <button className="py-4 px-7 w-[50%] md:max-w-[50%] my-6">
            Get Started
          </button>
        </div>
        <div className=" flex flex-col max-w-[33%]">
          <img src={bgImg} alt="hero_image" className="hidden md:flex " />
        </div>
      </div>
    </div>
  );
}
