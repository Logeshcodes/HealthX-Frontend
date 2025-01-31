import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const isUserAuthenticated = localStorage.getItem("user") !== null;

  return isUserAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
