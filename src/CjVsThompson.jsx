import React from "react";
import { useFetch } from "./hooks/useFetch";
import * as d3 from "d3";

export default function ThreePointPercentCjTh() {
  const [dataFantasyPlayers, loading2] = useFetch(
    "https://raw.githubusercontent.com/rdji20/first-react/main/nba_rank_by_year_tbl.csv"
  );

  const size = 500;
  const size2 = 1100;
  const margin = 30;
  const yearFantasyFilter = 2014;
  const player1 = "CJ McCollum";
  const player2 = "Klay Thompson";

  const maxThreeAtt = d3.max(
    dataFantasyPlayers.map((measurement) => {
      return parseFloat(measurement.fg3a);
    })
  );
  const minThreeAtt = d3.min(
    dataFantasyPlayers.map((measurement) => {
      return parseFloat(measurement.fg3a);
    })
  );
  const maxThreeMade = d3.max(
    dataFantasyPlayers.map((measurement) => {
      return parseFloat(measurement.fg3);
    })
  );
  const minThreeMade = d3.min(
    dataFantasyPlayers.map((measurement) => {
      return parseFloat(measurement.fg3);
    })
  );
  return (
    <svg width={size2} height={size} style={{ border: "1px solid black" }}>
      <text x={size2 / 4} y={margin}>
        {" "}
        Three pointer shots attempted and made by CJ and Klay 2014-2019{" "}
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
        y2={size - maxThreeMade - margin}
        stroke={"black"}
        strokeWidth="3"
      />
      <line
        x1={margin}
        y1={size - margin}
        x2={maxThreeAtt + margin}
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
        if (measurement.player == player1 || measurement.player == player2) {
          return (
            <circle
              key={index}
              cx={margin + parseFloat(measurement.fg3a)}
              cy={size - margin - parseFloat(measurement.fg3)}
              r={circleSize}
              fill={goodAverage ? "red" : "black"}
              stroke={goodAverage ? "red" : "black"}
              strokeOpacity="1"
            />
          );
        }
      })}
      {dataFantasyPlayers.map((measurement, index) => {
        let year = parseInt(measurement.year);
        if (year < yearFantasyFilter) {
          return;
        }
        if (measurement.player == player1 || measurement.player == player2) {
          return (
            <text
              key={index}
              x={margin + 30 + parseFloat(measurement.fg3a)}
              y={size - margin - parseFloat(measurement.fg3)}
              opacity={0.5}
              style={{ fontSize: 8 }}
              textAnchor="middle"
            >
              {measurement.player}
            </text>
          );
        }
      })}
      <text textAnchor="middle" x={20} y={size - maxThreeMade - margin}>
        {maxThreeMade}
      </text>
      <text textAnchor="middle" x={20} y={size - 10}>
        {minThreeMade}
      </text>
      <text textAnchor="middle" x={+maxThreeAtt + margin} y={size - 10}>
        {maxThreeAtt}
      </text>
      <circle
        cx={size2 - 250}
        cy={size - 50}
        r="5"
        fill="red"
        strokeOpacity="0.3"
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
        fill="black"
        strokeOpacity="0.3"
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
    </svg>
  );
}
