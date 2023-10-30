const BASE_USERS_URL_API = "http://localhost:3000/api/users";

export async function login(email, password) {
  try {
    const result = await fetch(`${BASE_USERS_URL_API}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (result.status === 200) {
      const data = await result.json();
      const token = data.token;

      // Guarda el token en una cookie
      setSessionTokenCookie(token);

      return token;
    } else {
      throw new Error("Error de inicio de sesión");
    }
  } catch (error) {
    console.error("Error while logging in");
    return Promise.reject("Error while logging in");
  }
}

export async function getUsers() {
  try {
    // Recupera el token de la cookie
    const token = getSessionTokenCookie();

    const response = await fetch(BASE_USERS_URL_API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error while fetching users");
    }
  } catch (error) {
    console.error("Error while fetching users");
    return Promise.reject("Error while fetching users");
  }
}

// Define una función para establecer la cookie de sesión
function setSessionTokenCookie(token) {
  document.cookie = `sessionToken=${token}; path=/;`;
}

// Define una función para obtener el token de la cookie
function getSessionTokenCookie() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === "sessionToken") {
      return value;
    }
  }
  return null; // Devuelve null si no se encuentra la cookie
}