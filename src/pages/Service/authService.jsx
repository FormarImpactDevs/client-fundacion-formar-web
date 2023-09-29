import axios from "axios";

export async function login(email, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
    
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      // Si el servidor envía un error en un formato JSON, puedes acceder a él aquí
      const errorMessage = error.response.data.error;
      // Haz algo con el mensaje de error, como mostrarlo en la interfaz de usuario
    } else {
      // Maneja otros errores, como problemas de red
      console.error("Error en la autenticación:", error);
      throw new Error("Error en la autenticación. Verifica tus credenciales.");
    }
}
}



