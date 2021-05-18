import React from "react";

export default function AllPlayersThrees(props) {
  const size = 500;
  const size2 = 1100;
  const margin = 30;
  const yearFantasyFilter = 2014;
  const dataFantasyPlayers = props.data;

  return (
    <div>
      <svg width={size2} height={size} style={{ border: "1px solid black" }}>
        <text x={size2 / 4} y={margin}>
          {" "}
          Three pointer shots attempted and made by all players 2014-2019{" "}
        </text>
        <text
          textAnchor="middle"
          transform="translate(0,300) rotate(270)"
          x={50}
          y={margin - 5}
          fontSize={12}
          fontWeight={200}
        >
          {" "}
          Shots made
        </text>
        <text
          fontWeight={200}
          fontSize={12}
          textAnchor="middle"
          x={size2 / 2}
          y={size - 10}
        >
          {" "}
          Shots attempted
        </text>
        <line
          x1={margin}
          y1={size - margin}
          x2={margin}
          y2={size - props.maxThreeMade - margin}
          stroke={"black"}
          strokeWidth="3"
        />
        <line
          x1={margin + 10}
          y1={size - margin}
          x2={props.maxThreeAtt + margin}
          y2={size - margin}
          stroke={"black"}
          strokeWidth="3"
        />
        {dataFantasyPlayers.map((measurement, index) => {
          let year = parseInt(measurement.year);
          let threeMade = parseFloat(measurement.fg3);
          let threeAtt = parseFloat(measurement.fg3a);
          let goodAverage = threeMade / threeAtt > 0.4;
          let circleSize = Math.ceil((threeMade / threeAtt) * 15);
          if (isNaN(circleSize)) {
            circleSize = 0;
          }
          if (year < yearFantasyFilter) {
            return;
          }

          return (
            <circle
              key={index}
              cx={margin + parseFloat(measurement.fg3a)}
              cy={size - margin - parseFloat(measurement.fg3)}
              r={circleSize}
              fill="none"
              stroke={goodAverage ? "red" : "black"}
              strokeOpacity="0.3"
            />
          );
        })}
        <circle
          cx={size2 - 250}
          cy={size - 50}
          r={5}
          fill="none"
          stroke={"red"}
          strokeOpacity="1"
        />
        <text
          textAnchor="begin"
          x={size2 - 230}
          y={size - 45}
          fontSize={10}
          fontWeight={200}
        >
          .40 Three point percentage or better
        </text>
        <circle
          cx={size2 - 250}
          cy={size - 70}
          r="5"
          fill="none"
          stroke={"black"}
          strokeOpacity="1"
        />
        <text
          textAnchor="begin"
          x={size2 - 230}
          y={size - 65}
          fontSize={10}
          fontWeight={200}
        >
          less than .40 Three point percentage
        </text>
        <text textAnchor="middle" x={20} y={size - props.maxThreeMade - margin}>
          {props.maxThreeMade}
        </text>
        <text textAnchor="middle" x={20} y={size - 10}>
          {props.minThree}
        </text>
        <text textAnchor="middle" x={props.maxThreeAtt + margin} y={size - 10}>
          {props.maxThreeAtt}
        </text>
      </svg>
    </div>
  );
}
