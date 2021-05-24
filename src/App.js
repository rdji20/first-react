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
      <h1 id="title-shw">SHOTwer comparisson shot between players</h1>
      <div>
        <SHOTwer data={allPlayersData} />
      </div>
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
