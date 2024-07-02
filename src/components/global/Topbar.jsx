import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./TopBar.scss"; // Import the SCSS file
import Header from "../../components/Header";

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
    <div className="topbar place-items-end">
      {/* <Header/> */}
      <div className="searh-bar ">
       
      </div>

      {/* ICONS */}
      <div className="icons">
        <button className="icon-button">
          <i className="fas fa-sun"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-bell"></i>
        </button>
        <div className="search-bar p-3 flex">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="icon-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <button className="icon-button">
          <i className="fas fa-cog"></i>
        </button>
        <button className="icon-button">
          <img
            className="avatar"
            src="https://www.bootstrap.gallery/demos/arise-admin-dashboard/assets/images/user.png"
            alt="User Avatar"
          />
        </button>
        {token ? (
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-login" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
