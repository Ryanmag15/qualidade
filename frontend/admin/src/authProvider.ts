import { AuthProvider, HttpError } from "react-admin";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    // Neste exemplo, qualquer combinação de username e password é autorizada
    // Você pode personalizar a lógica aqui conforme necessário
    localStorage.setItem("user", JSON.stringify({ username }));
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },

  checkError: () => Promise.resolve(),

  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),

  getPermissions: () => Promise.resolve(),

  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
