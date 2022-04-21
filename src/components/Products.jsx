import React from "react";

export default function Products() {
  return (
    <div className="bg-slate-200 w-full">
      <div className="flex flex-col max-w-[1000px] mx-auto md:flex-row md:justify-around py-14">
        <div className="flex flex-col md:pt-14 mt-14 md:max-w-[40%] p-4 md:max-h-[400px] px-14 md:px-0">
          <h1 className="text-sm font-light">RESOURCES</h1>
          <h3 className="text-3xl font-bold mt-3">
            Done-For-You Templates & Courses To Help You Grow
          </h3>
          <p className="font-light mt-5 mb-5">
            Essential content and design templates to help you every step of the
            way. Or prove yourself as the authority with a signature course.
            Everything you need to start working with clients on an expert level
            and skyrocket your business growth.
          </p>
        </div>
        <div className="my-5 md:mr-10 flex flex-col justify-around">
          <div className="flex flex-col bg-gradient-to-br from-cyan-600 via-sky-900 to-indigo-900 max-w-[370px] h-[500px] mx-auto rounded-md md:h-[400px] ">
            <div className=" p-12 flex h-[100%] justify-between flex-col text-center ">
              <div>
                <h3 className="">HFK</h3>
                <h2 className="text-3xl font-semibold mt-3 text-slate-100">
                  HF KITCHEN
                </h2>
              </div>
              <p className="text-slate-300">
                Everything you need to successfully meal prep like a pro.
                Includes monthly new recipes, so you'll always have new recipes
                that keep you on track and tickle your tastebuds
              </p>
              <button className="bg-slate-200 text-sky-900 p-3 font-medium border-0">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-gradient-to-tr from-yellow-500 via-orange-500 to-pink-500  max-w-[370px] h-[500px] mx-auto mt-8 rounded-md md:h-[400px] ">
            <div className=" p-12 flex h-[100%] justify-between flex-col text-center ">
              <div>
                <h3 className="">HFL</h3>
                <h2 className="text-3xl font-semibold mt-3 text-slate-100">
                  HF LIFT
                </h2>
              </div>
              <p className="text-slate-100">
                Monthly workout programs to keep your workouts fresh,
                challenging and those gains coming. The most affordable way to
                get expert personal training.
              </p>
              <button className="bg-slate-200 text-orange-500 p-3 font-medium border-0">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
