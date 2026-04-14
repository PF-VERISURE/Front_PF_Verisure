import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import UserPath from "../../services/UserPath";
import AuthModal from "../../components/molecules/authModal/AuthModal";

const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openAuthModal = () => setIsModalOpen(true);
  const closeAuthModal = () => setIsModalOpen(false);

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

      const response = await UserPath().login(credentials);

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

      console.log("Login exitoso. Usuario:", userData.userName);

      return loggedUser;
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, login, logout, user, isModalOpen, openAuthModal, closeAuthModal,}}
    >
      {children}
      <AuthModal isOpen={isModalOpen} onClose={closeAuthModal} />
    </UserContext.Provider>
  );
};

export default UserProvider;