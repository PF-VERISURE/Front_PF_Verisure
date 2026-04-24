import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import InputField from "../../atoms/InputField/InputField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import styles from "./LoginForm.module.css";
import { UserContext } from '../../../context/User/UserContext';
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

function LoginForm() {

  const errorModal = useModal();
  const [errorMessage, setErrorMessage] = useState("");

const [errors, setErrors] = useState({
  email: "",
  password: "",
});

const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email.trim() || !formData.password) {
      setError("Por favor completa todos los campos");
      return;
    }

    try {
    const response = await login(formData);
    console.log("Datos login:", response);

    // 🟡 1. CLIENT VALIDATION
    const newErrors = {
      email: !formData.email ? "El correo es obligatorio" : "",
      password: !formData.password ? "La contraseña es obligatoria" : "",
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    // 🔵 2. API CALL
    try {
      const response = await login(formData);
      navigate("/");
    } catch (error) {

      const response = error.response?.data;

      
      if (response?.fieldErrors) {
        setErrors({
          email: response.fieldErrors.email || "",
          password: response.fieldErrors.password || "",
        });
        return;
      }

      // 🔴 4. GLOBAL ERROR (auth, business)
      if (response?.error) {
        setErrorMessage(response.error);
        errorModal.open();
        return;
      }

      // ⚠️ 5. FALLBACK
      setErrorMessage("No se pudo conectar con el servidor.");
      errorModal.open();
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
        error={errors.email}
      />

      <InputField
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className={styles.buttonContainer}>
        <PrimaryButton type="submit" text="Log in" />
      </div>
      {errorModal.isOpen && (
      <InfoModal
        text={errorMessage}
        onClose={errorModal.close}
      />
    )}
    </form>
  );
}

export default LoginForm;