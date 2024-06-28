import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">
        Welcome to the Travel Booking Site
      </h1>
      <div className="text-center mt-4">
        <Link to="/login" className="text-blue-500 hover:underline">
          BookNow
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
