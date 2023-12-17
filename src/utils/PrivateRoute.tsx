import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

const PrivateRoutes = () => {
  let auth: boolean = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
