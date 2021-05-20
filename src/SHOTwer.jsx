import React, { useState } from "react";
import BasketballCourt from "./tools/BasketballSvg";

export default function SHOTwer() {
  const [shotwerQ, setShotwerQ] = useState(0);
  return (
    <div id="shotwer">
      <div className="control-box">
        <div className="player-search">
          <div>
            <input type="text" placeholder="Player 1" />
          </div>
          <div>
            <input type="text" placeholder="Player 2" />
          </div>
        </div>
        <h2>Time span</h2>
        <div className="shw-btns">
          <button
            onClick={() => {
              setShotwerQ(0);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setShotwerQ(1);
            }}
          >
            1st
          </button>
          <button
            onClick={() => {
              setShotwerQ(2);
            }}
          >
            2nd
          </button>
          <button
            onClick={() => {
              setShotwerQ(3);
            }}
          >
            3rd
          </button>
          <button
            onClick={() => {
              setShotwerQ(4);
            }}
          >
            4th
          </button>
          <button
            onClick={() => {
              setShotwerQ(5);
            }}
          >
            OT
          </button>
        </div>
        <p>Search by team:</p>
        <input type="text" placeholder="Team name" />
      </div>
      <div className="h-court">
        <BasketballCourt />
      </div>
    </div>
  );
}
