import React from "react";
import { useFetch } from "./hooks/useFetch";
import * as d3 from "d3";
import PortlandDraymond from "./PortlandDraymond";
import DraymondDraymond from "./Draymond";
import ThreePointPercent from "./StephAndLillard";
import ThreePointPercentCjTh from "./CjVsThompson";
import CjDraymond from "./DraymondCj";
import KlayDraymond from "./DraymondKlay";

const App = () => {
  const [dataDraymond, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba-draymond/draymond.csv"
  );

  const [dataFantasyPlayers, loading2] = useFetch(
    "https://raw.githubusercontent.com/rdji20/first-react/main/nba_rank_by_year_tbl.csv"
  );

  const size = 500;
  const size2 = 1100;
  const margin = 30;
  const scaleUp = 2;
  const startingPoint = size / 2;
  const yearFantasyFilter = 2014;

  const maxDraymond = d3.max(
    dataDraymond.map((measurement) => {
      return parseFloat(measurement.DRAYMOND);
    })
  );
  const minDraymond = d3.min(
    dataDraymond.map((measurement) => {
      return parseFloat(measurement.DRAYMOND);
    })
  );
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
    <div>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        <text text-anchor="start" x={size / 4 - 40} y="20">
          DRAYMOND defense statistics
        </text>
        {dataDraymond.map((measurement, index) => {
          let moreThan10thPoss = measurement.possessions >= 4000;
          let value = parseFloat(measurement.DRAYMOND);
          return (
            <line
              key={index}
              id={measurement.player}
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
          text-anchor="middle"
          x={size / 4}
          y={size - 50}
          fill="red"
          fontSize={10}
        >
          More than 4000 posessions
        </text>
        <text
          text-anchor="middle"
          x={(size * 3) / 4}
          y={size - 50}
          fill="black"
          fontSize={10}
        >
          Less than 4000 posessions
        </text>
        <text
          text-anchor="middle"
          x={size / 4 - 40}
          y={startingPoint - maxDraymond * scaleUp}
        >
          {maxDraymond}
        </text>
        <text
          text-anchor="middle"
          x={size / 4 - 40}
          y={startingPoint - minDraymond * scaleUp}
        >
          {minDraymond}
        </text>
        <text text-anchor="middle" x={size / 4 - 30} y={size / 2}>
          0
        </text>
      </svg>
      <PortlandDraymond />
      <DraymondDraymond />
      <CjDraymond />
      <KlayDraymond />
      <svg width={size2} height={size} style={{ border: "1px solid black" }}>
        <text x={size2 / 4} y={margin}>
          {" "}
          Three pointer shots attempted and made by all players 2014-2019{" "}
        </text>
        <text
          textAnchor="middle"
          transform="translate(0,300) rotate(270)"
          x={50}
          y={margin}
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
        {dataFantasyPlayers.map((measurement, index) => {
          let year = parseInt(measurement.year);
          let threeMade = parseFloat(measurement.fg3);
          let threeAtt = parseFloat(measurement.fg3a);
          let goodAverage = threeMade / threeAtt > 0.4;
          if (year < yearFantasyFilter) {
            return;
          }

          return (
            <circle
              key={index}
              cx={margin + parseFloat(measurement.fg3a)}
              cy={size - margin - parseFloat(measurement.fg3)}
              r="5"
              fill="none"
              stroke={goodAverage ? "red" : "black"}
              strokeOpacity="0.3"
            />
          );
        })}
        <circle
          cx={size2 - 250}
          cy={size - 50}
          r="5"
          fill="none"
          stroke={"red"}
          strokeOpacity="1"
        />
        <text
          text-anchor="begin"
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
          text-anchor="begin"
          x={size2 - 230}
          y={size - 65}
          fontSize={10}
          fontWeight={200}
        >
          less than .40 Three point percentage
        </text>
        <text text-anchor="middle" x={20} y={size - maxThreeMade - margin}>
          {maxThreeMade}
        </text>
        <text text-anchor="middle" x={20} y={size - 10}>
          {minThreeMade}
        </text>
        <text text-anchor="middle" x={+maxThreeAtt + margin} y={size - 10}>
          {maxThreeAtt}
        </text>
      </svg>
      <ThreePointPercent />
      <ThreePointPercentCjTh />

      {/* <h1> Dame vs Curry coming soon ...</h1>
      <svg
        width="750"
        height="831"
        viewBox="0 0 750 831"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="116.5"
          width="747"
          height="713"
          fill="#262626"
          stroke="black"
          stroke-width="3"
        />
        <rect
          x="45"
          y="115"
          width="660"
          height="380"
          fill="#D90429"
          fill-opacity="0.7"
        />
        <circle
          cx="375"
          cy="352.5"
          r="360.5"
          fill="#D90429"
          stroke="black"
          stroke-width="3"
        />
        <circle
          cx="375"
          cy="405"
          r="88.5"
          fill="#793A3A"
          stroke="black"
          stroke-width="3"
        />
        <rect
          x="253.5"
          y="116.5"
          width="242"
          height="287"
          fill="#793A3A"
          stroke="black"
          stroke-width="3"
        />
        <rect
          x="286.5"
          y="116.5"
          width="177"
          height="287"
          fill="#D90429"
          stroke="black"
          stroke-width="3"
        />
        <circle cx="375" cy="194" r="61" fill="#C4C4C4" />
        <line
          x1="330.015"
          y1="173.5"
          x2="420.011"
          y2="174.409"
          stroke="black"
          stroke-width="3"
        />
        <rect x="6" y="193" width="39" height="319" fill="#262626" />
        <rect x="705" y="176" width="37" height="319" fill="#262626" />
        <rect width="750" height="115" fill="white" />
        <rect x="45" y="115" width="80" height="380" fill="#D90429" />
        <rect x="625" y="115" width="80" height="380" fill="#D90429" />
        <line
          x1="706.5"
          y1="495"
          x2="706.5"
          y2="115"
          stroke="black"
          stroke-width="3"
        />
        <line
          x1="46.516"
          y1="500.003"
          x2="46.516"
          y2="115"
          stroke="black"
          stroke-width="3"
        /> */}
      {/* </svg> */}
    </div>
  );
};

export default App;
