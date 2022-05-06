import React from "react";

import bgImg from "../assets/guy-girl-training.jpg";
import bgImgOrder from "../assets/hero-image-exercise-order.svg";
import bgImgChat from "../assets/hero-image-chat.svg";
import bgImgDots from "../assets/hero-image-dots.svg";

export default function Hero() {
  return (
    <div className="w-full h-screen  flex flex-col justify-between px-8">
      <div className="flex flex-row max-w-[1240px] m-auto h-[600px]">
        <div className="flex flex-col justify-center py-8 pr-16 max-w-[700px]">
          <p className="text-2xl font-light">online fitness training</p>
          <h1 className="py-3 text-5xl  font-black tracking-wider md:leading-[1.05]">
            A NO-BS APPROACH TO{" "}
            <span className="text-sky-500">GETTING FIT</span> FOR LIFES’
            ADVENTURES
          </h1>
          <p className="text-1xl font-extralight">
            Taking out the guesswork of health and fitness to help you achieve
            the body transformations you want.
          </p>
          <button className="py-4 px-7 w-[50%] md:max-w-[50%] my-6">
            Get Started
          </button>
        </div>
        <div className=" flex flex-col max-w-[50%] justify-center items-end relative">
          <img
            src={bgImg}
            alt="hero_image"
            className="hidden md:flex max-w-[95%]"
          />
          <img
            src={bgImgOrder}
            alt="hero_image"
            className="hidden md:flex absolute top-14 left-16 "
          />
          <img
            src={bgImgChat}
            alt="hero_image"
            className="hidden md:flex absolute bottom-0 right-10 "
          />
          <img
            src={bgImgDots}
            alt="hero_image"
            className="hidden md:flex absolute bottom-[4.6rem] left-0"
          />
        </div>
      </div>
    </div>
  );
}
