import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const {user} = useSelector(state => state.user)
  return user && user?.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
