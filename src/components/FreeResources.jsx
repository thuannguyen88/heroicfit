import React from "react";
import yellowUnderline from "../assets/yellow-underline.svg";
import mealPlanImageOne from "../assets/1.svg";
import mealPlanImageTwo from "../assets/2.svg";
import mealPlanImageThree from "../assets/4.svg";
import mealPlanImageFour from "../assets/27.svg";
import mealPlanImageFive from "../assets/5.svg";

export default function FreeResources() {
  return (
    <div className="w-screen  flex flex-col justify-between">
      <div className="flex flex-col justify-center my-16 mx-auto px-10 max-w-[1000px]">
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
      </div>
      <div className="w-full flex flex-row">
        <div className="bg-cyan-100 py-10 w-[100%] lg:w-[60%] px-10 rounded-lg">
          <div className="flex flex-col justify-center my-16  mx-auto max-w-[567px] ">
            <h3 className="text-3xl  text-slate-800 font-bold">
              Snag Your Free Client Meal Plan
            </h3>
            <p className="mt-5 mb-3 text-slate-700">
              Download your free recipe meal plan today and get started on easy
              to make recipes that taste great and support your physique goals
            </p>
            <ul className="list-disc list-inside text-slate-700 ">
              <li className="py-1">
                Discover <strong>15 delicious and healthy recipes</strong>
              </li>
              <li className="py-1">
                Sample <strong>one week meal planner</strong>
              </li>
              <li className="py-1">
                <strong>Shopping list</strong> for weeks worth of meals
              </li>
              <li className="py-1">
                Easily <strong>log your meals </strong>to MyFitnessPal by
                scanning recipe barcode{" "}
              </li>
            </ul>
            <div className="flex justify-center my-5">
              <button className="mr-10 sm:py-4 sm:px-7 py-2 px-3 font-semibold">
                I'M HIGH PROTEIN
              </button>
              <button className="sm:py-4 sm:px-7 py-2 px-3 bg-transparent text-sky-500 font-semibold">
                I'M PLANT BASED
              </button>
            </div>
          </div>
        </div>
        <div className="w-[0]  flex justify-center my-auto lg:my-0 lg:w-[27%] lg:relative">
          <div className="hidden absolute top-4 left-0 lg:ml-[-70px] lg:inline-block">
            <img src={mealPlanImageOne} alt="/" className=" lg:h-[20rem]"></img>
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-10 lg:mb-[-25px]  sm:hidden lg:inline-block">
            <img src={mealPlanImageTwo} alt="/" className="h-[23rem] "></img>
          </div>
          <div className="absolute top-0 right-[8rem] hidden lg:inline-block">
            <img src={mealPlanImageThree} alt="/" className="h-[10rem] "></img>
          </div>
          <div className="absolute bottom-5 left-0 ml-[-30px] hidden lg:inline-block">
            <img src={mealPlanImageFour} alt="/" className="h-[10rem] "></img>
          </div>
          <div className="absolute top-5 right-0 ml-[-30px] hidden lg:inline-block">
            <img src={mealPlanImageFive} alt="/" className="h-[10rem] "></img>
          </div>
        </div>
      </div>
    </div>
  );
}
