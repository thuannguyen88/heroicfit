import React from "react";

export default function Footer() {
  return (
    <div className=" w-full flex bg-slate-700">
      <div className="flex flex-col justify-between md:flex-row my-10 mx-5">
        <div className="text-white text-2xl font-medium">HEROICFIT.</div>
        <div>
          <h3 className="text-slate-400 mt-12 text-sm font-medium">
            FREE STUFF
          </h3>
          <ul className="flex flex-col list-none text-white text-xs font-normal mt-5">
            <li className="py-2 px-0">MEAL PLAN</li>
            <li className="py-2 px-0">WORKOUT PLAN</li>
          </ul>
        </div>
        <div>
          <h3 className="text-slate-400 mt-12 text-sm font-medium">
            RESOURCES
          </h3>
          <ul className="flex flex-col list-none text-white text-xs font-normal mt-5">
            <li className=" py-2 px-0">ONLINE TRAINING</li>
            <li className=" py-2 px-0">RECIPE PACKS</li>
            <li className=" py-2 px-0">WORKOUT PROGRAMS</li>
          </ul>
        </div>
        <div>
          <div>instagram</div>
          <div>youtube</div>
        </div>
      </div>
    </div>
  );
}
