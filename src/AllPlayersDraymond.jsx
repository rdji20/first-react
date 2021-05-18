import React from "react";

export default function DraymondAllStats(props) {
  const dataDraymond = props.dataDraymond;
  const size = 500;
  const scaleUp = 2;
  const startingPoint = size / 2;

  return (
    <div>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        <text textAnchor="start" x={size / 4 - 40} y="20">
          DRAYMOND defense statistics
        </text>
        {dataDraymond.map((measurement, index) => {
          let moreThan10thPoss = measurement.possessions >= 4000;
          let value = parseFloat(measurement.DRAYMOND);
          if (isNaN(value)) {
            value = 0;
          }
          return (
            <line
              key={index}
              className={measurement.player}
              x1={size / 4}
              y1={size / 2 - value * scaleUp}
              x2={size / 4 + size / 2}
              y2={size / 2 - value * scaleUp}
              stroke={moreThan10thPoss ? "red" : "black"}
              strokeOpacity={0.3}
            />
          );
        })}
        <text
          textAnchor="middle"
          x={size / 4}
          y={size - 50}
          fill="red"
          fontSize={10}
        >
          More than 4000 posessions
        </text>
        <text
          textAnchor="middle"
          x={(size * 3) / 4}
          y={size - 50}
          fill="black"
          fontSize={10}
        >
          Less than 4000 posessions
        </text>
        <text
          textAnchor="middle"
          x={size / 4 - 40}
          y={startingPoint - props.max * scaleUp}
        >
          {props.max}
        </text>
        <text
          textAnchor="middle"
          x={size / 4 - 40}
          y={startingPoint - props.min * scaleUp}
        >
          {props.min}
        </text>
        <text textAnchor="middle" x={size / 4 - 30} y={size / 2}>
          0
        </text>
      </svg>
    </div>
  );
}
