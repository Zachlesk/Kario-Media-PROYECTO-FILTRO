import React from 'react';
import './styles/LoadingScreen.css'; 
import logo from '../assets/logo.png'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
