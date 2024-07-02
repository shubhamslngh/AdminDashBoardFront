import React from "react";
import LineChart from "../components/LineChart";
import WorldChart from "../components/WorldChart";
import { WorldChartData } from "../components/WorldChartData";
import { mockLineData, mockTopPlaces } from "../components/mockData";
import TopPlaces from "../components/TopPlaces";
import Header from "../components/Header";
import StatsCard from "../components/StatCards";
import StatsCardBar from "../components/StatsCardBar";
import "./HomePage.scss"; // Import the SCSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <div className="stats-container">
        <StatsCard
          title="Total Customer"
          value="307.48K"
          description="+30% This month"
          trend={30}
        />
        <StatsCard
          title="Total Revenue"
          value="$30.58K"
          description="-15% This month"
          trend={-15}
        />
        <div>
          <StatsCardBar chartData={WorldChartData} />
        </div>
      </div>
      <div className="charts-container">
        <div className="chart-item">
          <LineChart data={mockLineData} />
        </div>
        <div className="chart-item top-places-container">
          <TopPlaces places={mockTopPlaces} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
