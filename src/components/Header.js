import React from "react";
import "./Header.scss"; // Import the SCSS file for Header

const Header = ({ title, subtitle }) => {
    return (
        <div className="header">
            <div className="welcome-message">
                {title || "Welcome Back, Here's what happening with your dashboard today"} {/* Default title if none is provided */}
            </div>
            {subtitle && <div className="subtitle">{subtitle}</div>} {/* Render subtitle only if provided */}
        </div>
    );
};

export default Header;
