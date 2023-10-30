import React, { useState, useEffect, useContext } from "react";
import  {loginUser} from "../services/users.service";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Alert } from "../components/Alert";
import jwt_decode from "jwt-decode";

// Crea el contexto de autenticación
const AuthContext = React.createContext();

// contexto de autenticacion
export const useAuth = () => {
  return useContext(AuthContext);
};

// componente de autenticacion
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = React.useState({
    show: false,
    type: "",
    message: "",
  });
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("_token");

  useEffect(() => {
    if (storedToken) {
      const decodedToken = storedToken ? jwt_decode(storedToken) : null;
      const { user } = decodedToken ? decodedToken.payload : null;
      setCurrentUser(user);
      return navigate("/");
    }
  }, []);

 

  const login = (data) => {
    setLoading(true);

    console.log("Iniciando sesión...");

    loginUser(data)
      .then((res) => {
        
      console.log("Respuesta de inicio de sesión:", res);
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.json());
        }
      })
      .then(({ token }) => {
        console.log("Token de sesión:", token);

        document.cookie = `_token=${token}; path=/;`; 

        const decodedToken = token ? jwt_decode(token) : null;
        const { user } = decodedToken ? decodedToken.payload : null;
        setCurrentUser(user);

        return navigate("/");
      })
      .catch((error) => {
        
      console.log("Error de inicio de sesión:", error);
    
        console.log(error)
        setAlert({
          message: error,
          type: "danger",
          show: true,
        })
      })
      .finally(() => setLoading(false));
  };

 /*  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("_token");
    navigate("/signin");
  }; */

  const value = {
    currentUser,
    login,
    logout,
  };

  // Indicador de carga
  if (loading) {
    return <Loading />;
  }
  console.log("Valor de alert.show:", alert.show);

  return (
    <AuthContext.Provider value={value}>
      {alert.show && <Alert alert={alert} setAlert={setAlert} />
      }
      
      {children}
      
    </AuthContext.Provider>
  );
};