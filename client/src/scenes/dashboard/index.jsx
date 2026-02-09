import React from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  return <Navigate to="/user-dashboard" replace />;
};

export default Dashboard;
