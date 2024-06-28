import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CelebrationIcon from "@mui/icons-material/Celebration";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const profileImage =
    theme.palette.mode === "dark" ? "/white.png" : "/black.png";

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          color: `${colors.primary[100]} !important`,
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          height: "100vh",
          position: "fixed",
          backgroundColor: colors.primary[400], // Use the theme color here
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  THE HIMALYAN SQUAD
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={profileImage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Manager
                </Typography>
                <Typography variant="subtitle2" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              color={colors.grey[300]}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Master
            </Typography>
            <Item
              title="Packages"
              to="/packages"
              icon={<BusinessOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bookings"
              to="/bookingPage"
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
          </Box>
        </Menu>
      </ProSidebar>
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: isCollapsed ? "80px" : "250px",
          overflowY: "auto",
          height: "100vh",
          padding: 1.5,
          backgroundColor: theme.palette.background.default, // Use theme background color
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
  