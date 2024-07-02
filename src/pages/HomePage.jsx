import React from "react";
import LineChart from "../components/LineChart";
import WorldChart from "../components/WorldChart";
import { WorldChartData } from "../components/WorldChartData";
import {mockLine1Data, mockLineData, mockTopPlaces } from "../components/mockData";
import TopPlaces from "../components/TopPlaces";
import Header from "../components/Header";
import StatsCard from "../components/StatCards";
import StatsCardBar from "../components/StatsCardBar";
import "./HomePage.scss"; // Import the SCSS file
import StatsCardWithLineChart from "../components/StatsCardWithLineChart";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <div className="stats-container">
        <StatsCardWithLineChart
          title="Total Customer"
          value="307.48K"
          trend="+30"
          description="This month"
          lineChartData={mockLine1Data}
        />
        <StatsCardWithLineChart
          title="Total Customer"
          value="490.48$"
          trend="+40"
          description="This month"
          lineChartData={mockLine1Data}
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
