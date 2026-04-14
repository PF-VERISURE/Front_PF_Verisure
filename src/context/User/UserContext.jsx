import { createContext, useState } from "react";
import UserService from "../../services/UserService";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (formData) => {
    try {
      const response = await UserService().login(formData);
      const userData = response.data;

      const loggedUser = {
        id: userData.id,
        email: userData.email || formData.email,

      };

      setUser(loggedUser);
      return loggedUser;
    } catch (error) {
      console.error("Error en login:", error);
      throw new Error("Correo o contraseña incorrectos");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}