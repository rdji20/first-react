import React, { useState } from "react";
import BasketballCourt from "./tools/BasketballSvg";
import Player1 from "./Player1";
import Player2 from "./Player2";

export default function SHOTwer(props) {
  const shotData = props.data;
  const [shotwerQ, setShotwerQ] = useState(0);
  const [apply1, setApply1] = useState(false);
  const [apply2, setApply2] = useState(false);
  const [made, setMade] = useState(false);
  const [player1Enabled, setPlayer1Enabled] = useState(true);
  const [player2Enabled, setPlayer2Enabled] = useState(true);
  const [player1, setPlayer1] = useState("none");
  const [player2, setPlayer2] = useState("none");
  const [zone, setZone] = useState("all");

  function handleSubmit(e) {
    e.preventDefault();
    setApply1(true);
    setApply2(true);
  }

  function updateZone(e) {
    e.preventDefault();
    setZone(e.target.value);
  }

  function handleHideP1(e) {
    if (player1Enabled) {
      e.target.textContent = "Show P1";
      setPlayer1Enabled(false);
    } else {
      e.target.textContent = "Hide P1";
      setPlayer1Enabled(true);
    }
  }

  function handleHideP2(e) {
    if (player2Enabled) {
      e.target.textContent = "Show P2";
      setPlayer2Enabled(false);
    } else {
      e.target.textContent = "Hide P2";
      setPlayer2Enabled(true);
    }
  }

  return (
    <div id="shotwer">
      <div className="control-box">
        <h2>Search by player</h2>
        <div className="player-search">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend> Search by player</legend>
              <input
                onChange={(e) => {
                  setShotwerQ(0);
                  setApply1(false);
                  setPlayer1(e.target.value);
                }}
                placeholder="Player1"
              />
              <input
                onChange={(e) => {
                  setShotwerQ(0);
                  setApply2(false);
                  setPlayer2(e.target.value);
                }}
                placeholder="Player2"
              />
              <button>APPLY</button>
            </fieldset>
          </form>
          <button onClick={handleHideP1}>Hide P1</button>
          <button onClick={handleHideP2}>Hide P2</button>
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
        <label>
          Filter by court zone:
          <select onChange={updateZone}>
            <option value="all">ALL</option>
            <option value="Right Side(R)">Right Side(R)</option>
            <option value="Right Side Center(RC)">Right Side Center(RC)</option>
            <option value="Center(C)">Center(C)</option>
            <option value="Left Side(L)">Left Side(L)</option>
            <option value="Left Side Center(LC)">Left Side Center(LC)</option>
          </select>
        </label>
      </div>
      <div className="h-court">
        <svg width={800} height={750} style={{ border: "3px solid black" }}>
          <BasketballCourt />
          <Player1
            data={shotData}
            clusterShots={shotwerQ}
            display={player1Enabled}
            madeShot={made}
            playerName={apply1 ? player1 : "none"}
            zone={zone}
          />
          <Player2
            data={shotData}
            clusterShots={shotwerQ}
            display={player2Enabled}
            madeShot={made}
            playerName={apply2 ? player2 : "none"}
            zone={zone}
          />
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
        </svg>
      </div>
    </div>
  );
}
