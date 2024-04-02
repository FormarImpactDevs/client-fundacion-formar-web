import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userLoginService } from "../services/users.service";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [inProgress, setInProgress] = useState(true); // Cambiamos el estado inicial a true
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("_token");
    if (storedToken) {
      const decodedToken = jwtDecode(storedToken);
      const { user } = decodedToken.payload;
      setCurrentUser(user);
      setIsAuth(true);
    }
    setInProgress(false); // Establecemos inProgress en false después de la verificación
  }, []);

  const login = async (data) => {
    setInProgress(true);
    try {
      const token = await userLoginService(data);
      window.localStorage.setItem("_token", token);
      const decodedToken = jwtDecode(token);
      const { user } = decodedToken.payload;
      setCurrentUser(user);
      setIsAuth(true);
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setIsAuth(false);
    }
    setInProgress(false);
  };

  const logout = () => {
    setInProgress(true);
    try {
      window.localStorage.removeItem("_token");
      setCurrentUser(null);
      setIsAuth(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
    setInProgress(false);
  };

  const value = {
    currentUser,
    login,
    logout,
    inProgress,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
