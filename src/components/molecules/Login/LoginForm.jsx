import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import InputField from "../../atoms/InputField/InputField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import styles from "./LoginForm.module.css";
import { UserContext } from '../../../context/User/UserContext';
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (name, value) => {
  switch (name) {
    case "email":
      if (!value.trim()) return "El correo es obligatorio.";
      if (!EMAIL_REGEX.test(value)) return "Introduce un correo válido.";
      return "";
    case "password":
      if (!value) return "La contraseña es obligatoria.";
      if (value.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
      return "";
    default:
      return "";
  }
};

function LoginForm() {
  const errorModal = useModal();
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };
    setErrors(newErrors);
    if (newErrors.email || newErrors.password) return;

    try {
      await login(formData);
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

      setErrorMessage(
        error.response?.status === 401
          ? "Correo o contraseña incorrectos."
          : response?.error || "No se pudo conectar con el servidor."
      );
      errorModal.open();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explora, descubre <br /> y mejora el mundo</h1>
        <p className={styles.subtitle}>Inicie sesión para continuar</p>
      </div>

      <InputField
        label="Correo"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
      />

      <InputField
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        showToggle
      />

      <div className={styles.buttonContainer}>
        <PrimaryButton type="submit" text="Log in" />
      </div>

      {errorModal.isOpen && (
        <InfoModal text={errorMessage} onClose={errorModal.close} />
      )}
    </form>
  );
}

export default LoginForm;
