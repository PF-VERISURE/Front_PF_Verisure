import { useState } from "react";
import InputField from "../atoms/InputField/InputField";
import PrimaryButton from "../atoms/PrimaryButton/PrimaryButton";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    Correo: "",
    Contraeña: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos login:", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1 className={styles.title}>Bienvenido</h1>
        <p className={styles.subtitle}>Inicie sesión para continuar</p>
      </div>

      <InputField
        label="Correo"
        type="correo"
        name="correo"
       
        value={formData.correo}
        onChange={handleChange}
      />

      <InputField
        label="Contraseña"
        type="contraseña"
        name="contraseña"
      
        value={formData.contraseña}
        onChange={handleChange}
      />

      <div className={styles.buttonContainer}>
        <PrimaryButton type="submit" text="Log in" />
      </div>
    </form>
  );
}

export default LoginForm;