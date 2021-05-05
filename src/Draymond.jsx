import React from "react";
import { useFetch } from "./hooks/useFetch";
import * as d3 from "d3";

export default function DraymondDraymond() {
  const [dataDraymond, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba-draymond/draymond.csv"
  );

  const size = 500;
  const scaleUp = 20;
  const startingPoint = size / 2;

  let max = 0;
  let min = 0;
  return (
    <svg width={400} height={size} style={{ border: "1px solid black" }}>
      <text textAnchor="start" x={400 / 4 - 40} y="20">
        DRAYMOND statistics for Draymond
      </text>
      <text textAnchor="start" x={400 / 4 - 40} y="40">
        Green scale x20
      </text>

      {dataDraymond.map((measurement, index) => {
        let moreThan10thPoss = measurement.possessions >= 4000;
        let value = parseFloat(measurement.DRAYMOND);
        let count = 0;
        if (measurement.player == "Draymond Green") {
          if (count == 0) {
            min = value;
            count++;
          }
          if (max <= value) {
            max = value;
          }
          if (min >= value) {
            min = value;
          }
          return (
            <line
              key={index}
              id={measurement.player}
              x1={400 / 4}
              y1={size / 2 - value * scaleUp}
              x2={400 / 4 + 400 / 2}
              y2={size / 2 - value * scaleUp}
              stroke={moreThan10thPoss ? "red" : "black"}
              strokeOpacity={0.3}
            />
          );
        } else {
          return;
        }
      })}
      <text
        textAnchor="middle"
        x={size / 5}
        y={size - 100}
        fill="red"
        fontSize={10}
      >
        More than 4000 posessions
      </text>
      <text
        textAnchor="middle"
        x={(size * 3) / 5}
        y={size - 100}
        fill="black"
        fontSize={10}
      >
        Less than 4000 posessions
      </text>
      <text
        textAnchor="middle"
        x={400 / 4 - 40}
        y={startingPoint - max * scaleUp}
      >
        {max}
      </text>
      <text
        textAnchor="middle"
        x={400 / 4 - 40}
        y={startingPoint - min * scaleUp}
      >
        {min}
      </text>
      <text textAnchor="middle" x={400 / 4 - 30} y={size / 2}>
        0
      </text>
    </svg>
  );
}
