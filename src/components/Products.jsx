import React from "react";

export default function Products() {
  return (
    <div className="bg-slate-200 w-full">
      <div className="flex flex-col">
        <div className="">
          <h1>THE TOOLS</h1>
          <h6>Choose your own path in life.</h6>
        </div>
        <div>
          <div>
            <h3>icon</h3>
            <h2>HF KITCHEN</h2>
            <p>
              Everything you need to successfully meal prep like a pro. Includes
              monthly new recipes, so you'll always have new recipes that keep
              you on track and tickle your tastebuds
            </p>
            <button>LEARN MORE</button>
          </div>
          <div>
            <h3>icon</h3>
            <h2>HF LIFT</h2>
            <p>
              Monthly workout programs to keep your workouts fresh, challenging
              and those gains coming. The most affordable way to get expert
              personal training.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
