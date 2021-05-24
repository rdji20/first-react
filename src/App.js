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

  return (
    <div>
      <h1 id="title-shw">SHOTwer comparison shot between players</h1>
      <div>
        <SHOTwer data={allPlayersData} />
      </div>
      <h1> The SHOTwer </h1>
      <p>
        {" "}
        SHOTwer is a anlysis tool intended to compare two NBA players type of
        shots and shot distribution. It can be used as an exploratory analysis
        visualization of the NBA shot stats database, to make an analysis on a
        specific type of player depending on their shot, among other analysis.
        The intention of this tool is to show the data points in a way that the
        user can visually space the shots taken in consideration. In this
        version we can filter by zone, time span, and weather the shot was made
        or not. We can see the shots of just one player or make the comparison
        between the two entities by overlapping the second player data points on
        top of the first player's shots. When hovering on the data points, we
        show the name of the player who made that shot, the type of shot, and
        the minutes and seconds remaining when that shot was attempted.
      </p>
      <h1>Portland TrailBlazers Research</h1>
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
