import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ login, children }) => {
  if (!login) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

export default ProtectedRouter;
