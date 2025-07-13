import React, { useState } from 'react';
import Login from './components/Login';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Calendar />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;