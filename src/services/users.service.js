const BASE_USERS_URL_API = import.meta.env.VITE_BASE_API_URL;

export async function userLoginService(userData) {
  try {
    const result = await fetch(`${BASE_USERS_URL_API}users/login`, {
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