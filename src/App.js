import React from "react";
import { useFetch } from "./hooks/useFetch";

//Check d3 extend, d3 min. and d3 libraries

const App = () => {
  const [dataDraymond, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba-draymond/draymond.csv"
  );

  // const [dataB];

  const size = 500;
  const margin = 20;
  const scaleUp = 10;
  let totalDraymond;

  return (
    <div>
      <p>Hello World</p>
      <svg width={size} height={size} style={{ border: "1px solid black" }}>
        {dataDraymond.slice(0, 300).map((measurement, index) => {
          totalDraymond += measurement.DRAYMOND;
          return (
            <line
              key={index}
              id={measurement.player}
              x1={size / 3}
              y1={(margin - measurement.DRAYMOND) * scaleUp}
              x2={size / 3 + size / 3}
              y2={(margin - measurement.DRAYMOND) * scaleUp}
              stroke="black"
              strokeOpacity={0.2}
            />

            // <circle
            //   key={index}
            //   cx={index}
            //   cy={measurement.DRAYMOND}
            //   r="10"
            // ></circle>
          );
        })}
        {console.log(totalDraymond)}
      </svg>

      <h1> Dame vs Curry coming soon ...</h1>
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
        />
      </svg>
    </div>
  );
};

export default App;
