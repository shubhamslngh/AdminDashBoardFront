import React from "react";
import "./StatCard.scss"; // Import the SCSS file for StatsCard

const StatsCard = ({ title, value, change, changeType }) => {
    return (
        <div className="stats-card1">
            <h3>{value}</h3>
            <p>{title}</p>
            <p className={`change ${changeType}`}>{change}</p>
        </div>
    );
};

export default StatsCard;
