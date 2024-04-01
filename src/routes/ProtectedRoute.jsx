import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Loading } from "../components/Loading";

export const ProtectedRoute = () => {
  const { isAuth, inProgress } = useAuth();

  if (inProgress) {
    return <Loading />;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
