import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userLoginService } from "../services/users.service";

// Crea el contexto de autenticación
const AuthContext = React.createContext();

// contexto de autenticacion
export const useAuth = () => {
  return useContext(AuthContext);
};

// componente de autenticacion
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("_token");

  useEffect(() => {
    if (storedToken) {
      const decodedToken = storedToken ? jwtDecode(storedToken) : null;
      const { user } = decodedToken ? decodedToken.payload : null;
      setCurrentUser(user);
    }
  }, []);

 

  const login = async(data) => {
    try {
      console.log(data)
      const token = await userLoginService(data);
      window.localStorage.setItem("_token", token)
      console.log(token)

        const decodedToken = await token ? jwtDecode(token) : null;
        const { user } = decodedToken ? decodedToken.payload : null;
        setCurrentUser(user);

    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  const value = {
    currentUser,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};