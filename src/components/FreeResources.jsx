import React from "react";
import freeResourceRecipeImage from "../assets/recipe-pack-1.png";
import yellowUnderline from "../assets/yellow-underline.svg";

export default function FreeResources() {
  return (
    <div className="w-full  flex flex-col justify-between">
      <div className="flex flex-col justify-center my-16 mx-auto px-14 max-w-[1000px]">
        <div className="text-center">
          <p className="font-light text-sm">
            WANT TO START TRANSFORMING YOUR PHYSIQUE?
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-14">
            Get Started With These{" "}
            <span className="relative">
              Free Resources
              <div className="absolute bottom-[-12px] left-0">
                <img src={yellowUnderline} alt="/"></img>
              </div>
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col mt-10 mb-4 mx-auto max-w-[400px]">
            <img
              src={freeResourceRecipeImage}
              alt="/"
              className="mt-4 h-96"
            ></img>
            <h2 className="text-2xl font-bold mt-5">
              15 Minute Recipe Pack & Meal Plan
            </h2>
            <p className="font-light mt-1">
              download your recipe pack if you want recipes you can make in a
              pinch, keep you full and on track with your physique goals
            </p>
            <button className="py-4 px-7 mt-5">GIVE IT TO ME !</button>
          </div>
          <div className="flex flex-col items-left mt-10 mb-4 mx-auto max-w-[400px] md:ml-16">
            <img
              src={freeResourceRecipeImage}
              alt="/"
              className="mt-4 h-96"
            ></img>
            <h2 className="text-2xl font-bold mt-5">
              One Week Workout Programme
            </h2>
            <p className="font-light mt-1">
              download your recipe pack if you want recipes you can make in a
              pinch, keep you full and on track with your physique goals
            </p>
            <button className="py-4 px-7 mt-5">YES, I'D LIKE THAT !</button>
          </div>
        </div>
      </div>
    </div>
  );
}
