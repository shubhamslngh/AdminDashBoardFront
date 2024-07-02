import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiService from "../axiosServices"; // Ensure this is the correct path to your API service
import styles from "./LoginPage.module.scss";

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      navigate("/"); // Redirect to homepage or another page
    }
  }, [navigate, setIsLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiService.login(username, password);
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      setIsLoggedIn(true);
      window.location.reload();
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Please Login or Register</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className={styles.links}>
            <Link to="/register" className={styles.link}>
              Register
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/forgot-password" className={styles.link}>
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
