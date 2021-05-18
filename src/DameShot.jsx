import React from "react";

export default function DameShot(props) {
  const lillardShotDB = props.lillard;
  const quarteState = props.clusterShots;
  const madeShot = props.madeShot;

  return lillardShotDB.map((measurement, index) => {
    if (madeShot) {
      if (measurement.EVENT_TYPE == "Missed Shot") {
        return;
      }
    }
    if (quarteState == 0) {
      return (
        <circle
          key={index}
          cx={measurement.svg_relative_position_x}
          cy={measurement.svg_relative_position_y - 10}
          r={5}
          fill={"white"}
          opacity="0.4"
          stroke={"white"}
          strokeOpacity={0.4}
        ></circle>
      );
    } else if (parseInt(measurement.PERIOD) == quarteState) {
      return (
        <circle
          key={index}
          cx={measurement.svg_relative_position_x}
          cy={measurement.svg_relative_position_y - 10}
          r={5}
          fill={"white"}
          opacity="0.4"
          stroke={"white"}
          strokeOpacity={0.4}
        ></circle>
      );
    } else {
      return;
    }
  });
}
