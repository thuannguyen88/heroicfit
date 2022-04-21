import React from "react";

export default function About() {
  return (
    <div className="w-full h-[300px] my-32">
      <div className="flex flex-col max-w-[1000px] mx-auto px-14 max-h-[300px]">
        <div className="text-center ">
          <p className="inline-block font-light text-sm leading-[7px] bg-rose-200">
            THE HEROICFIT MISSION
          </p>
          <h2 className="text-3xl font-bold mt-2">
            We're On A Mission To Deliver High-Quality Personal Training That's
            Accessible To Everyone
          </h2>
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
