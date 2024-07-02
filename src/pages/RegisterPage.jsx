import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiService from "../axiosServices"; // Ensure this is the correct path to your API service
import styles from "./RegisterPage.module.scss"; // Import the SCSS module

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.register(username, email, password);
      navigate("/login");
    } catch (err) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Register</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.mb4}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.mb4}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.mb6}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.flex}>
            <button type="submit" className={styles.button}>
              Register
            </button>
            <button type="submit" className={styles.button}>
              <Link to="/login" className={styles.button}>
                Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
