import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import * as d3 from "d3";
import HardenShot18 from "./HardenShot";
import BasketballCourt from "./tools/BasketballSvg";
import DameShot from "./DameShot";

const Cd = () => {
  const [lillardShotDB, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba_shot_18to19_Dame.csv"
  );
  const [dataHarden, loading2] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba_shot_18to19_Beard.csv"
  );
  const [beardEnabled, setBeardEnabled] = useState(false);
  const [made, setMade] = useState(false);
  const [quarter, setQuarter] = useState(0);

  return (
    <div className="player-shots">
      <div className="quarter-container">
        <button
          onClick={() => {
            setQuarter(0);
          }}
        >
          All shots
        </button>
        <button
          onClick={() => {
            setQuarter(1);
          }}
        >
          First Quarter Shots
        </button>
        <button
          onClick={() => {
            setQuarter(2);
          }}
        >
          Second Quarter Shots
        </button>
        <button
          onClick={() => {
            setQuarter(3);
          }}
        >
          Third Quarter Shots
        </button>
        <button
          onClick={() => {
            setQuarter(4);
          }}
        >
          Fourth Quarter Shots
        </button>
        <button
          onClick={() => {
            setQuarter(5);
          }}
        >
          Overtime Shots
        </button>
      </div>
      <svg width={1000} height={750} style={{ border: "3px solid black" }}>
        <BasketballCourt />
        <text
          onClick={() => {
            if (!made) {
              setMade(true);
            } else {
              setMade(false);
            }
          }}
          id="made-shots-btn"
          x={600}
          y={700}
          fill={made ? "greenyellow" : "grey"}
          fontSize={20}
        >
          Just Made Shots
        </text>
        <DameShot
          lillard={lillardShotDB}
          clusterShots={quarter}
          madeShot={made}
        />
        <image
          id="jharden"
          onClick={() => {
            if (!beardEnabled) {
              setBeardEnabled(true);
            } else {
              setBeardEnabled(false);
            }
          }}
          className={beardEnabled ? "clicked-img" : ""}
          x="800"
          href="https://rdji20.github.io/img/james_harden.JPG"
          width="200"
          height="200"
        />
        <HardenShot18
          madeShot={made}
          display={beardEnabled}
          harden={dataHarden}
          clusterShots={quarter}
        />
      </svg>
    </div>
  );
};

export default Cd;
