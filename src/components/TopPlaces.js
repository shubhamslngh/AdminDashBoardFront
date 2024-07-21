import React from 'react';
// import getRandomPrice  from '../utils';
import './TopPlaces.scss'; // Import the SASS file for styling
const { getRandomPrice } = require('../utils');

const TopPlaces = ({ places }) => {
    return (
        <div className="top-places-containe h-full w-full">
            <h2>Top Places</h2>
            <ul>
                {places.map((place, index) => (
                    <li key={index} className="top-place-item">
                        <span className="place-name">{place}</span>
                        <span className="place-price">₹{getRandomPrice()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopPlaces;
