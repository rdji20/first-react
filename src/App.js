import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import * as d3 from "d3";
import PortlandDraymond from "./PortlandDraymond";
import DraymondDraymond from "./Draymond";
import ThreePointPercent from "./StephAndLillard";
import ThreePointPercentCjTh from "./CjVsThompson";
import CjDraymond from "./DraymondCj";
import KlayDraymond from "./DraymondKlay";
import UnderdogSvg from "./Cd";
import DraymondAllStats from "./AllPlayersDraymond";
import AllPlayersThrees from "./AllPlayersThrees";
import InteractionAnalysisMessage from "./paragraphs/InteractionAnalysisMessage";
import Presentation from "./paragraphs/Presentation";
import SHOTwer from "./SHOTwer";

const App = () => {
  const [dataDraymond, loading] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba-draymond/draymond.csv"
  );

  const [dataFantasyPlayers, loading2] = useFetch(
    "https://raw.githubusercontent.com/rdji20/first-react/main/nba_rank_by_year_tbl.csv"
  );

  const [allPlayersData, loading3] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba_shot_18to19_All.csv"
  );

  const maxDraymond = d3.max(
    dataDraymond.map((measurement) => {
      return parseFloat(measurement.DRAYMOND);
    })
  );
  const minDraymond = d3.min(
    dataDraymond.map((measurement) => {
      if (isNaN(measurement.DRAYMOND)) {
        return 0;
      }
      return parseFloat(measurement.DRAYMOND);
    })
  );
  const maxThreeAtt = d3.max(
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
      if (isNaN(measurement.fg3)) {
        return 0;
      }
      return parseFloat(measurement.fg3);
    })
  );

  const draymond = {
    data: dataDraymond,
    max: maxDraymond,
    min: minDraymond,
  };

  const [listPlayers, setListPlayers] = useState(false);

  return (
    <div>
      <h1 id="title-shw">SHOTwer comparison shot between players</h1>
      <p>
        {" "}
        This software contains data from all the shots attempted by all the
        players in the 2018-19 NBA season. A query example is player1 = "Damian
        Lillard" and player2 "Markelle Fultz" (Expected name as NBA database).
      </p>
      <button
        className="center-btn"
        onClick={(e) => {
          if (!listPlayers) {
            e.target.textContent = "Hide list";
            setListPlayers(true);
          } else {
            e.target.textContent = "Show list";
            setListPlayers(false);
          }
        }}
      >
        {" "}
        Click here to see a list of player names
      </button>
      <p className={listPlayers ? "" : "hidden"}>
        <span id="bold-big"> Exclude the number: </span> 125. Justise Winslow
        124. Larry Nance Jr. 123. Cody Zeller 122. Kyle Anderson 121. Rajon
        Rondo 120. Jeremy Lamb 119. Kelly Olynyk 118. Nicolas Batum 117. Terry
        Rozier 116. Lonzo Ball 115. Rudy Gay 114. Tyreke Evans 113. Patty Mills
        112. Tim Hardaway Jr. 111. Evan Fournier 110. Jae Crowder 109. Eric
        Gordon 108. Dario Saric 107. Reggie Jackson 106. Al Farouq-Aminu 105.
        Jaren Jackson Jr. 104. Fred VanVleet 103. Enes Kanter 102. Danny Green
        101. Gordon Hayward 100. Otto Porter Jr. 99. Lauri Markkanen 98. Caris
        LeVert 97. Marcus Smart 96. Dwyane Wade 95. Dennis Schroder 94. Goran
        Dragic 93. Darren Collison 92. Jarrett Allen 91. Ricky Rubio 90. Bogdan
        Bogdanovic 89. Derrick Favors 88. Brook Lopez 87. Nikola Mirotic 86.
        Jaylen Brown 85. Jerami Grant 84. Spencer Dinwiddie 83. Jeff Teague 82.
        Bojan Bogdanovic 81. TJ Warren 80. D'Angelo Russell 79. Harrison Barnes
        78. Hassan Whiteside 77. Marcus Morris 76. Kevin Love 75. Aaron Gordon
        74. Joe Ingles 73. Willie Cauley-Stein 72. Jonas Valanciunas 71. Gary
        Harris 70. Andrew Wiggins 69. Brandon Ingram 68. Kyle Kuzma 67. Paul
        Millsap 66. JJ Redick 65. Robert Covington 64. Derrick Rose 63. DeAndre
        Ayton 62. Josh Richardson 61. Malcolm Brogdon
      </p>
      <div>
        <SHOTwer data={allPlayersData} />
      </div>
      <h1> The SHOTwer </h1>
      <p>
        {" "}
        SHOTwer is a anlysis tool intended to compare two NBA players' types of
        shots and shot distribution. It can be used as an exploratory analysis
        visualization of the NBA shot stats database, or to do an analysis on a
        specific type of player depending on their shot, among other types of
        analyses. The intention of this tool is to show the data points in a way
        in which the user can visually space the shots taken in consideration.
        In this version we can filter by zone, time span, and weather the shot
        was made or not. We can see the shots of just one player or make the
        comparison between the two entities by overlapping the second player
        data points on top of the first player's shots. When hovering on the
        data points, we show the name of the player who made that shot, the type
        of shot, and the minutes and seconds remaining when that shot was
        attempted.
      </p>
      <h1 id="eda-title">Portland TrailBlazers Research</h1>
      <div id="dashboard">
        <Presentation />
        <div id="graphs">
          <DraymondAllStats
            dataDraymond={draymond.data}
            max={draymond.max}
            min={draymond.min}
          />
          <PortlandDraymond />
          <DraymondDraymond />
          <CjDraymond />
          <KlayDraymond />
          <AllPlayersThrees
            data={dataFantasyPlayers}
            minThree={minThreeMade}
            maxThreeMade={maxThreeMade}
            maxThreeAtt={maxThreeAtt}
          />
          <ThreePointPercent />
          <ThreePointPercentCjTh />
        </div>
      </div>
      <section id="interactive">
        {/* <img
          src="img/dame_driving.jpeg"
          alt="Damian lillard driving to the basket"
        /> */}
        <h1>Damian Lillard's shot comparisson chart 2018-19</h1>
        <p>
          These are all shots Damian Lillard took during the 2018-19 NBA season.
          Click on the word "Just made shots" to see made shots. Click on the
          image of James Harden to compare the shots between players.
        </p>
        <div id="message-cont"></div>
        <UnderdogSvg />
        <InteractionAnalysisMessage />
      </section>
    </div>
  );
};

export default App;
