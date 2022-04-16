import React from "react";

export default function FreeResources() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="flex flex-col justify-center w-full m-auto px-14">
        <div className="text-center">
          <p className="my-2 text-1xl font-light">
            WANT TO START TRANSFORMING YOUR PHYSIQUE?
          </p>
          <h2 className="text-3xl font-semibold">
            Get Started With These{" "}
            <span className=" underline underline-offset-2">Free</span> Resources
          </h2>
        </div>
        <div>
          <div>
            <p>GET STARTED WITH MEAL PLANNING</p>
            <img alt="/"></img>
            <h2>Recipe Plan</h2>
            <button>GIVE IT TO ME</button>
          </div>
          <div>
            <p>GET STARTED WITH TRAINING PLAN!</p>
            <img alt="/"></img>
            <h2>Workout Plan</h2>
            <button>YES, I WANT THAT!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
