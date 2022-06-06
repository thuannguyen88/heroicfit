import React from "react";
import yellowUnderline from "../assets/yellow-underline.svg";
import mealPlanImageOne from "../assets/1.svg";
import mealPlanImageTwo from "../assets/2.svg";
import mealPlanImageThree from "../assets/4.svg";
import mealPlanImageFour from "../assets/27.svg";
import mealPlanImageFive from "../assets/5.svg";

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
      </div>
      <div className="w-full flex flex-row">
        <div className="bg-cyan-500 py-10 w-[100%] sm:w-[60%]">
          <div className="flex flex-col justify-center my-16 px-10 mx-auto max-w-[567px]">
            <h3>Snag Your Free Meal Plan</h3>
            <p>
              Download your free recipe meal plan today and get started on easy
              to make recipes that taste great and support your physique goals
            </p>
            <ul className="list-disc list-inside">
              <li>x 3 one day meal plans</li>
              <li>breakfast, lunch, dinner and snacks</li>
              <li>
                includes my fitness pal barcode for keeping accurate nutrition
                log
              </li>
            </ul>
            <div>
              <button className="mr-2">I'M HIGH PROTEIN</button>
              <button>I'M PLANT BASED</button>
            </div>
          </div>
        </div>
        <div className="w-[0] sm:w-[48%] flex justify-center my-auto lg:my-0 lg:w-[27%] lg:relative">
          <div className=" hidden sm:inline-block lg:absolute lg:top-4 lg:left-0 ml-[0] lg:ml-[-70px]">
            <img
              src={mealPlanImageOne}
              alt="/"
              className="sm:h-[30rem] lg:h-[20rem]"
            ></img>
          </div>
          <div className="absolute bottom-0 right-10 mb-[-25px] hidden lg:inline-block">
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
