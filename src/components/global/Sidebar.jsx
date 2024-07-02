import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.scss"; // Import the SCSS file

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CelebrationIcon from "@mui/icons-material/Celebration";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      className="menu-item"
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <span>{title}</span>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const profileImage = "/black.png"; // Simplified for this example

  return (
    <div className="sidebar-container">
      <ProSidebar collapsed={isCollapsed} className="pro-sidebar">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            className="menu-toggle"
          >
            {!isCollapsed && (
              <div className="logo-container">
                <span className="logo-title">THE HIMALYAN SQUAD</span>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </button>
              </div>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div className="profile-section">
              <div className="profile-image-container">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={profileImage}
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <span className="profile-name">Manager</span>
                <span className="profile-role">Admin</span>
              </div>
            </div>
          )}

          <div className="menu-items">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <span className="menu-section-title">Master</span>
            <Item
              title="Packages"
              to="/packages"
              icon={<BusinessOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bookings"
              to="/booking"
              icon={<CelebrationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Cancel Reasons"
              to="/ListCancelReasons"
              icon={<CancelPresentationOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Media Type"
              to="/ListMediaType"
              icon={<MovieOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Address Type"
              to="/ListAddressType"
              icon={<BusinessOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Trips"
              to="/listfoodtypes"
              icon={<LocalOfferOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </ProSidebar>
      <div className={`content-area ${isCollapsed ? "collapsed" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
