import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockCredentials } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuthSession = () => {
      const storedAuth = localStorage.getItem('clinic_auth_session');
      if (storedAuth) {
        try {
          const authData = JSON.parse(storedAuth);
          const currentTime = new Date().getTime();
          
          // Check if session is still valid (24 hours)
          if (authData.expiresAt && currentTime < authData.expiresAt) {
            setUser(authData.user);
            setIsAuthenticated(true);
          } else {
            // Clear expired session
            localStorage.removeItem('clinic_auth_session');
          }
        } catch (error) {
          console.error('Error parsing auth session:', error);
          localStorage.removeItem('clinic_auth_session');
        }
      }
      setIsLoading(false);
    };

    checkAuthSession();
  }, []);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockCredentials.email && password === mockCredentials.password) {
          const userData = {
            email: email,
            name: 'Clinic Staff',
            role: 'Staff Member'
          };
          
          // Create session with 24-hour expiry
          const sessionData = {
            user: userData,
            expiresAt: new Date().getTime() + (24 * 60 * 60 * 1000) // 24 hours
          };
          
          localStorage.setItem('clinic_auth_session', JSON.stringify(sessionData));
          setUser(userData);
          setIsAuthenticated(true);
          resolve(userData);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('clinic_auth_session');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};