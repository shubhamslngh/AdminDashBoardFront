import React from "react";
import LineChart from "../components/LineChart";
import WorldChart from "../components/WorldChart";
import { WorldChartData } from "../components/WorldChartData";
import {
  mockWorldData,
  mockLineData,
  mockTopPlaces,
} from "../components/mockData";
import TopPlaces from "../components/TopPlaces";
import "./HomePage.scss"; 

const HomePage = () => {
  return (
    <div className="content-area">
      <div className="homepage-container">
        <div className="charts-container">
          <div className="chart-item">
            <LineChart data={mockLineData} />
          </div>
          <div className="chart-item top-places-container">
            <TopPlaces places={mockTopPlaces} />
          </div>
        </div>
        <div className="world-chart-container">
          <WorldChart data={WorldChartData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
