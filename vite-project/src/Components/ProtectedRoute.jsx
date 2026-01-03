import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ children, allowedRole }) => {
  const { isAuth, role } = useAuth();
  if (!isAuth) {
    return <Navigate to="/" />
  }

  if (allowedRole && role == allowedRole) {
    return <Navigate to="/" />;
  }

  return children;

}

export default ProtectedRoute;