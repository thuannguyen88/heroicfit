import React from "react";

export default function Testimonial() {
  return (
    <div className="bg-slate-300 w-full flex ">
      <div className="flex flex-col mx-auto my-16 max-w-[1000px]">
        <p className=" text-sm font-light text-center leading-[7px]  ">
          <span className="inline-block bg-rose-200">TESTIMONIAL</span>
        </p>
        <h1 className="text-center mt-14 mb-6 text-3xl font-semibold px-10">
          "I Just Purchased The Recipes, Made Some Of The Recipes And It Tastes
          Fab! Thank You."
        </h1>
        <p className="text-center font-light text-sm">–Rachel Coombs</p>
      </div>
    </div>
  );
}
