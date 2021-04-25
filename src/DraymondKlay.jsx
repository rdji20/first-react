import React from "react";
import { useFetch } from "./hooks/useFetch";

export default function KlayDraymond() {
  const [dataDraymond, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba-draymond/draymond.csv"
  );
  const player1 = "Klay Thompson";
  const size = 500;
  const scaleUp = 20;
  const startingPoint = size / 2;
  let max = 0;
  let min = 0;
  return (
    <svg width={400} height={size} style={{ border: "1px solid black" }}>
      <text text-anchor="start" x={400 / 4 - 80} y="20">
        DRAYMOND statistics for Klay Thompson
      </text>
      <text text-anchor="start" x={400 / 4 - 40} y="40">
        Current Players scale x20
      </text>

      {dataDraymond.map((measurement, index) => {
        let moreThan10thPoss = measurement.possessions >= 4000;
        let value = parseFloat(measurement.DRAYMOND);
        let count = 0;
        if (measurement.player == player1) {
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
              x2={400 / 4 + size / 2}
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
        text-anchor="middle"
        x={size / 5}
        y={size - 100}
        fill="red"
        fontSize={10}
      >
        More than 4000 posessions
      </text>
      <text
        text-anchor="middle"
        x={(size * 3) / 5}
        y={size - 100}
        fill="black"
        fontSize={10}
      >
        Less than 4000 posessions
      </text>
      <text
        text-anchor="middle"
        x={400 / 4 - 40}
        y={startingPoint - max * scaleUp}
      >
        {max}
      </text>
      <text
        text-anchor="middle"
        x={400 / 4 - 40}
        y={startingPoint - min * scaleUp}
      >
        {min}
      </text>
      <text text-anchor="middle" x={400 / 4 - 30} y={size / 2}>
        0
      </text>
    </svg>
  );
}