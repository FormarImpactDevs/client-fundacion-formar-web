import axios from "axios";

export async function login(email, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    throw new Error(error.response.data.error); // mensaje de error del backend
  }
}



