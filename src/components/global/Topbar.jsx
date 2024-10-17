import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./TopBar.scss"; // Import the SCSS file
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login page
    window.location.reload();
  };

  return (
    <div className="topbar">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%">
        <Box px={10} display="flex" alignItems="center">
          <IconButton
            component="a"
            href="https://github.com/shubhamslngh/AdminDashBoardFront"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
              textDecoration: "none",
            }}>
            <GitHubIcon fontSize="large" />
            <Typography variant="body1" sx={{ marginLeft: "8px" }}>
              Access GitHub
            </Typography>
          </IconButton>
        </Box>

        <div className="icons">
          <button className="icon-button">
            <i className="fas fa-sun"></i>
          </button>
          <button className="icon-button">
            <i className="fas fa-bell"></i>
          </button>
          <div className="search-bar p-3 flex">
            {/* Uncomment if you want to add a search bar */}
            {/* <input type="text" placeholder="Search" className="search-input" /> */}
            {/* <button className="icon-button">
              <i className="fas fa-search"></i>
            </button> */}
          </div>
          <button className="icon-button">
            <i className="fas fa-cog"></i>
          </button>
          <button className="icon-button">
            <img
              className="avatar"
              src="https://st.depositphotos.com/2247761/2438/i/950/depositphotos_24382501-stock-photo-african-american-man-profile-blank.jpg"
              alt="User Avatar"
            />
          </button>
          {token ? (
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button
              className="btn btn-login"
              onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Topbar;
