import React from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import "./StatsCardWithLineChart.scss";

const StatsCardWithLineChart = ({ title, value, trend, description, lineChartData }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };

    return (
        <div className="stats-card-with-line-chart">
            <div className="card-content">
                <h3>{value}</h3>
                <p className="title">{title}</p>
                <p className="trend">{trend}</p>
                <p className="description">{description}</p>
            </div>
            <div className="line-chart-container">
                <Line data={lineChartData} options={options} />
            </div>
        </div>
    );
};

export default StatsCardWithLineChart;
