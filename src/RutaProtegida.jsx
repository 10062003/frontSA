import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    return element;
  } else {
    // Mostrar toast de sesión cerrada al redirigir al Login
    toast.error("Tu sesión ha expirado. Por favor inicia sesión nuevamente.");

    return <Navigate to="/Login" replace />;
  }
};

export default PrivateRoute;
