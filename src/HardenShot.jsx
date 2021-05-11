import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export default function HardenShot18() {
  const [dataHarden, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba_shot_18to19_Beard.csv"
  );

  function changeBackground(e) {
    e.target.style.fill = "#d90429";
    e.target.style.stroke = "white";
    e.target.style.r = 8;
  }

  function returnBackground(e) {
    e.target.style.fill = "yellow";
    e.target.style.stroke = "yellow";
    e.target.style.r = 5;
  }

  return dataHarden.map((measurement, index) => {
    let areaRange =
      measurement.SHOT_ZONE_AREA.replace(/\s/g, "-") +
      measurement.SHOT_ZONE_RANGE.replace(/\s/g, "-");
    let shotArea =
      "" +
      areaRange +
      " beard-shots hidden " +
      measurement.EVENT_TYPE.replace(/\s/g, "-");
    let title =
      "Quarter: " +
      measurement.PERIOD +
      " Minutes remaining: " +
      measurement.MINUTES_REMAINING +
      " Seconds remaining: " +
      measurement.SECONDS_REMAINING;

    return (
      <circle
        key={index}
        onMouseEnter={changeBackground}
        onMouseLeave={returnBackground}
        className={shotArea}
        onClick={() => {
          let message = document.createElement("p");
          let container = document.getElementById("message-cont");
          container.innerHTML = "";
          message.style.color = "#d90429";
          container.appendChild(message);
          message.textContent = measurement.ACTION_TYPE;
        }}
        cx={measurement.svg_relative_position_x}
        cy={measurement.svg_relative_position_y - 10}
        r={5}
        fill={"yellow"}
        opacity="0.4"
        stroke={"yellow"}
        strokeOpacity="0.4"
      >
        <title>{title}</title>
      </circle>
    );
  });
}
