import React from "react";
import "./StatCard.scss"; // Import the SCSS file for StatsCard
import WorldChart from "./WorldChart"; // Import the WorldChart component

const StatsCardBar = ({ chartData }) => {
    return (
        <div className="stats-card">
            <div className="chart-container h-[100px] w-[100px]">
                <WorldChart data={chartData} />
            </div>
        </div>
    );
};

export default StatsCardBar;
