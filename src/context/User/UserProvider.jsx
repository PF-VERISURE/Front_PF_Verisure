import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import UserService from "../../services/UserService";


const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState(null);


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUser(null);
    setIsLogged(false);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    const savedToken = localStorage.getItem("token");

    if (!savedToken || !savedUser) {
      logout();
    } else {
      setUser(JSON.parse(savedUser));
      setIsLogged(true);
    }
  }, []);

  const login = async (credentials) => {
    try {
      console.log("Intentando login...");

      const response = await UserService.login(credentials);

      const authHeader = response.headers["authorization"];
      const token = authHeader ? authHeader.replace("Bearer ", "") : null;
      const userData = response.data;

      if (!token) {
        throw new Error("No se recibió token del servidor");
      }

      const loggedUser = {
        id: userData.id,
        email: userData.email,
      };

      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(loggedUser));

      setUser(loggedUser);
      setIsLogged(true);

      console.log("Login exitoso");

      return loggedUser;
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, login, logout, user,}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;