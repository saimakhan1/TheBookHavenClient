import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }

  // Minimal fix: wrap location in an object as `from`
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
