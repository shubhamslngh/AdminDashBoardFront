import React from "react";
import LineChart from "./LineChart";
import TopPlaces from "./TopPlaces";
import { mockLineData, mockTopPlaces } from "../components/mockData";
import "./ChartsContainer.scss"; // Import the SCSS file for ChartsContainer

const ChartsContainer = () => {
    return (
        <div className="charts-container">
            <div className="chart-item">
                <LineChart data={mockLineData} />
            </div>
            <div className="chart-item top-places-container">
                <TopPlaces places={mockTopPlaces} />
            </div>
        </div>
    );
};

export default ChartsContainer;
