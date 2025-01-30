import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAdminAuthenticated = localStorage.getItem("isAdmin") === "true";

  if (!isAdminAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" />;
  }

  // Allow access if authenticated
  return children;
};

export default ProtectedRoute;
