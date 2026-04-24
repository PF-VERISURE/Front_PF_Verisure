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
  }, []);

  const login = async (credentials) => {
    try {
      console.log("Intentando login...");

      const userData = await UserService.login(credentials);

      console.log("FULL RESPONSE:", userData);

      if (!userData || !userData.profileData) {
        throw new Error("Respuesta del servidor inválida");
      }

      const loggedUser = {
      role: userData.role,
      name:
        userData.role === "ONG"
          ? userData.profileData?.organizationName
          : userData.profileData?.firstName,
      };

      localStorage.setItem("userData", JSON.stringify(loggedUser));

      setUser(loggedUser);
      setIsLogged(true);

      return loggedUser;

    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };


  // const login = async (credentials) => {
  //   try {
  //     console.log("Intentando login...");

  //     const response = await UserService.login(credentials);
  //     console.log("FULL RESPONSE:", response);

  //     const authHeader = response.headers["authorization"];
  //     if (!authHeader) {
  //       throw new Error("No se recibió token del servidor");
  //     }
  //     const token = authHeader.replace("Bearer ", "");
  //     const userData = response.data;

  //     if (!token) {
  //       throw new Error("No se recibió token del servidor");
  //     }

  //     const loggedUser = {
  //     id: userData.profile.id,
  //     email: userData.profile.email,
  //     firstName: userData.profile.firstName,
  //     lastName: userData.profile.lastName,
  //     role: userData.role,
  //   };

  //     localStorage.setItem("token", token);
  //     localStorage.setItem("userData", JSON.stringify(loggedUser));

  //     setUser(loggedUser);
  //     setIsLogged(true);

  //     console.log("Login exitoso");

  //     return loggedUser;
  //   } catch (error) {
  //     console.error("Error en login:", error);
  //     throw error;
  //   }
  // };

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, login, logout, user,}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;