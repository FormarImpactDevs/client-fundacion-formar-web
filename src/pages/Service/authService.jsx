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
  } catch ({response}) {
    const {data} = response;    
    console.warn();

    throw new Error(data.errors.custom.msg); // mensaje de error del backend
  }
}



