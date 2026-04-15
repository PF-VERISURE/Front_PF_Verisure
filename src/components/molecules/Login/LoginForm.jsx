import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import InputField from "../../atoms/InputField/InputField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import styles from "./LoginForm.module.css";
import { UserContext } from '../../../context/User/UserContext';

function LoginForm() {
const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
    const response = await login(formData);
    console.log("Datos login:", response);

    navigate("/");
    } catch (error) {
    console.error("Login failed:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explora, descubre <br/> y mejora el mundo</h1>
        <p className={styles.subtitle}>Inicie sesión para continuar</p>
      </div>

      <InputField
        label="Correo"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Contraseña"
        type="password"
        name="password"
      
        value={formData.password}
        onChange={handleChange}
      />

      <div className={styles.buttonContainer}>
        <PrimaryButton type="submit" text="Log in" />
      </div>
    </form>
  );
}

export default LoginForm;