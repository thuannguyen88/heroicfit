import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-500 w-full flex">
      <div className="flex flex-col justify-between">
        <div>HEROICFIT.</div>
        <div>
          <h3>Free Stuff</h3>
          <ul>
            <li>meal plan</li>
            <li>workout plan</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>online training</li>
            <li>recipe packs</li>
            <li>workout programs</li>
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
