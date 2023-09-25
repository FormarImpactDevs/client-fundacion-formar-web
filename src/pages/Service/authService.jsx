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
    console.error("Error en la autenticación:", error);
    throw new Error("Error en la autenticación. Verifica tus credenciales.");
  }
}