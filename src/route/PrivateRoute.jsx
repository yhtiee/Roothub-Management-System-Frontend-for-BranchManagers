import React from 'react';
import {Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isauth = localStorage.getItem("authTokens")
    
    return isauth ? children : <Navigate to="/login"/>;
  }

export default PrivateRoute;
