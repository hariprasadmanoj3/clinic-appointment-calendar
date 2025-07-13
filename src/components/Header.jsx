import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useDarkMode';
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">Clinic Appointment Calendar</h1>
        </div>
        
        <div className="header-right">
          <button 
            className="theme-toggle-btn"
            onClick={toggleDarkMode}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          <div className="user-info">
            <span className="user-name">{user?.name}</span>
            <span className="user-role">{user?.role}</span>
          </div>
          
          <button 
            className="logout-btn"
            onClick={handleLogout}
            title="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;