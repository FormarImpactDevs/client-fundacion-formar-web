const BASE_USERS_URL_API = "http://localhost:3000/api/users";

export async function userLoginService(userData) {
  try {
    const result = await fetch(`${BASE_USERS_URL_API}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (result.status === 200) {
      const data = await result.json();
      const token = data.token;

      return token;
    } else {
      throw new Error("Error de inicio de sesión");
    }
  } catch (error) {
    return Promise.reject("Email o contraseña incorrecta");
  }
}