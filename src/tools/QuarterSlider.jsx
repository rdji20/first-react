import React, { useState } from "react";

export default function QuarterSlider(props) {
  const [quarter, setQuarter] = useState("");
  const lillard = props.shots;
  return (
    <div id="top-inter">
      <p>
        <span class="info-mess">Full game shots</span>
      </p>
      <div class="slidecontainer">
        <input type="range" min="0" max="5" value="0" class="slider" />
      </div>
    </div>
  );
}
