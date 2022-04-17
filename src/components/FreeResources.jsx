import React from "react";
import freeResourceRecipeImage from "../assets/recipe-pack-1.png";

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
            <span className=" underline underline-offset-2">Free</span>{" "}
            Resources
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col mt-10 mb-4 mx-auto max-w-[400px]">
            <img src={freeResourceRecipeImage} alt="/" className="mt-4"></img>
            <p className="mt-6">
              <span className="inline-block font-light text-sm leading-[7px]  ">
                GET STARTED WITH MEAL PLANNING
              </span>
            </p>
            <h2 className="text-3xl font-bold mt-1 mb-4">
              A Week Worth Of Quick Nutritious Recipes
            </h2>
            <button className="py-4 px-7">GIVE IT TO ME !</button>
          </div>
          <div className="flex flex-col items-left mt-10 mb-4 mx-auto max-w-[400px] md:ml-16">
            <img src={freeResourceRecipeImage} alt="/" className="mt-4"></img>
            <p className="text-sm font-light mt-6">
              <span className="inline-block font-light text-sm leading-[7px]  ">
                GET STARTED WITH TRAINING
              </span>
            </p>
            <h2 className="text-3xl font-bold mt-1 mb-4">
              One Week Workout Programme
            </h2>
            <button className="py-4 px-7">YES, I'D LIKE THAT !</button>
          </div>
        </div>
      </div>
    </div>
  );
}
