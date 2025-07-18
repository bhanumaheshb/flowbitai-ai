// src/components/AdminRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    // Logged in, but not admin → redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // User is admin → render the child component
  return children;
};

export default AdminRoute;
