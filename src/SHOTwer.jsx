import React, { useState } from "react";
import BasketballCourt from "./tools/BasketballSvg";
import Player1 from "./Player1";
import Player2 from "./Player2";
import MiniBasketball from "./tools/MiniBasketball";

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
        <div className="player-search">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Search Players</legend>
              <div>
                <input
                  className="p1-input"
                  onChange={(e) => {
                    setShotwerQ(0);
                    setApply1(false);
                    setPlayer1(e.target.value);
                  }}
                  placeholder="Player1"
                />
                <button onClick={handleHideP1}>Hide P1</button>
              </div>
              <div>
                <input
                  className="p2-input"
                  onChange={(e) => {
                    setShotwerQ(0);
                    setApply2(false);
                    setPlayer2(e.target.value);
                  }}
                  placeholder="Player2"
                />
                <button onClick={handleHideP2}>Hide P2</button>
              </div>

              <button id="apply-btn">APPLY</button>
            </fieldset>
          </form>
        </div>
        <h2>Time span</h2>
        <div className="shw-btns">
          <button
            style={
              shotwerQ == 0
                ? { backgroundColor: "#d90429" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              setShotwerQ(0);
            }}
          >
            All
          </button>
          <button
            style={
              shotwerQ == 1
                ? { backgroundColor: "#d90429" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              setShotwerQ(1);
            }}
          >
            1st
          </button>
          <button
            style={
              shotwerQ == 2
                ? { backgroundColor: "#d90429" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              setShotwerQ(2);
            }}
          >
            2nd
          </button>
          <button
            style={
              shotwerQ == 3
                ? { backgroundColor: "#d90429" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              setShotwerQ(3);
            }}
          >
            3rd
          </button>
          <button
            style={
              shotwerQ == 4
                ? { backgroundColor: "#d90429" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              setShotwerQ(4);
            }}
          >
            4th
          </button>
          <button
            style={
              shotwerQ == 5
                ? { backgroundColor: "#d90429" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              setShotwerQ(5);
            }}
          >
            OT
          </button>
        </div>
        <h2>Filter by zone</h2>
        <button
          style={
            zone == "all"
              ? { backgroundColor: "#d90429" }
              : { backgroundColor: "white" }
          }
          id="allz-btn"
          onClick={() => {
            setZone("all");
          }}
        >
          All zones
        </button>
        <div>
          <svg id="mini-container">
            <MiniBasketball />
            <rect
              onMouseEnter={(e) => {
                e.target.style.fill = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.fill = "white";
              }}
              onClick={() => {
                setZone("Left Side(L)");
              }}
              x="10"
              y="10"
              width="50"
              height="40"
              fill="white"
              opacity="0.7"
            ></rect>
            <rect
              onMouseEnter={(e) => {
                e.target.style.fill = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.fill = "white";
              }}
              onClick={() => {
                setZone("Right Side(R)");
              }}
              x="145"
              y="10"
              width="50"
              height="40"
              fill="white"
              opacity="0.7"
            ></rect>
            <rect
              onMouseEnter={(e) => {
                e.target.style.fill = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.fill = "white";
              }}
              onClick={() => {
                setZone("Left Side Center(LC)");
              }}
              x="10"
              y="60"
              width="50"
              height="80"
              fill={"white"}
              opacity="0.7"
            ></rect>
            <rect
              onMouseEnter={(e) => {
                e.target.style.fill = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.fill = "white";
              }}
              onClick={() => {
                setZone("Right Side Center(RC)");
              }}
              x="145"
              y="60"
              width="50"
              height="80"
              fill="white"
              opacity="0.7"
            ></rect>
            <rect
              onMouseEnter={(e) => {
                e.target.style.fill = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.fill = "white";
              }}
              onClick={() => {
                setZone("Center(C)");
              }}
              x="70"
              y="10"
              width="65"
              height="130"
              fill="white"
              opacity="0.7"
            ></rect>
          </svg>
        </div>
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
