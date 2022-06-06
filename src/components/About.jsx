import React from "react";
import tyrePush from "../assets/guy-tyre-push.jpg";

export default function About() {
  return (
    <div className="w-screen h-[42rem] my-[10rem] flex ">
      <div className="flex flex-row max-w-[1240px] mx-auto  px-5 my-auto justify-between">
        <div className="hidden md:flex w-[45%]">
          <img src={tyrePush} alt="/" className="h-[600px]"></img>
        </div>
        <div className="flex flex-col justify-center w-[100%] md:w-[45%] text-left ">
          <p className="inline-block font-light text-sm ">
            THE HEROICFIT MISSION
          </p>
          <div>
            <h2 className="text-3xl font-bold mt-2 border-l-[10px] border-sky-500 pl-3">
              We're On A Mission To Deliver High-Quality Personal Training
              That's Accessible To Everyone
            </h2>
          </div>

          <p className="text-1xl mt-6">
            We help people achieve the body transformation results they want. No
            matter where you are in the world, our tailored online program gives
            you the same proven methods, data-driven approach and culture of
            accounntability that have helped clients achieve remarkable results
            in and out of the gym globally.
          </p>
        </div>
      </div>
    </div>
  );
}
