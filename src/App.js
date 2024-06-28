import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPackages } from '../src/features/packages/packageSlice';
import HomePage from '../src/pages/HomePage';
import PackagesPage from '../src/pages/PackagesPage';
import BookingPage from '../src/pages/BookingPage'; // Import BookingPage
import LoginPage from '../src/pages/LoginPage'; // Ensure correct import
import RegisterPage from '../src/pages/RegisterPage';
import ForgotPasswordPage from '../src/pages/ForgotPasswordPage';
import Topbar from '../src/components/global/Topbar';
import Sidebar from '../src/components/global/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './store';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './index.css';

const theme = createTheme();

function App() {
  const dispatch = useDispatch();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <div className="app">
              <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
              <main className="content">
                <Topbar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes>
                  <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <HomePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/packages"
                    element={
                      <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <PackagesPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/booking"
                    element={
                      <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <BookingPage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
