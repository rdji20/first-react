import React, { useState } from "react";

export default function Player1(props) {
  const shotData = props.data;
  const [shot, setShot] = useState("none");
  const shotsState = props.display;
  const quarteState = props.clusterShots;
  const madeShot = props.madeShot;
  const player = props.playerName;
  const zone = props.zone;

  return shotData.map((measurement, index) => {
    if (madeShot) {
      if (measurement.EVENT_TYPE == "Missed Shot") {
        return;
      }
    }

    if (player == measurement.PLAYER_NAME) {
      if (zone != "all") {
        if (measurement.SHOT_ZONE_AREA != zone) {
          return;
        }
      }
      if (quarteState == 0) {
        return (
          <circle
            key={index}
            className={shotsState ? "" : "hidden"}
            onClick={() => {}}
            cx={measurement.svg_relative_position_x}
            cy={measurement.svg_relative_position_y - 10}
            r={5}
            fill={"#17EEB8"}
            opacity="0.35"
            stroke={"#17EEB8"}
            strokeOpacity="0.35"
          ></circle>
        );
      } else if (parseInt(measurement.PERIOD) == quarteState) {
        return (
          <circle
            key={index}
            className={shotsState ? "" : "hidden"}
            onClick={() => {}}
            cx={measurement.svg_relative_position_x}
            cy={measurement.svg_relative_position_y - 10}
            r={5}
            fill={"#17EEB8"}
            opacity="0.35"
            stroke={"#17EEB8"}
            strokeOpacity="0.35"
          ></circle>
        );
      } else {
        return;
      }
    }
  });
}
