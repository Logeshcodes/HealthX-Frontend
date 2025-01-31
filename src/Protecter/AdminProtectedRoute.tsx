import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {

  const isAdminAuthenticated = localStorage.getItem("isAdmin") === "true";

  return isAdminAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
  
};

export default AdminProtectedRoute;
