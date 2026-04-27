import { useState } from "react";
import { X, Building2 } from "lucide-react";
import InputField from "../../atoms/InputField/InputField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton";
import UserService from "../../../services/UserService";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";
import styles from "./CreateOngModal.module.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-]{7,15}$/;

const initialState = {
  organizationName: "",
  cif: "",
  email: "",
  password: "",
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  website: "",
  address: "",
};

const validateField = (name, value) => {
  switch (name) {
    case "organizationName":
      if (!value.trim()) return "El nombre es obligatorio.";
      if (value.trim().length < 3) return "Mínimo 3 caracteres.";
      return "";
    case "cif":
      if (!value.trim()) return "El CIF es obligatorio.";
      if (value.trim().length < 5) return "CIF no válido.";
      return "";
    case "email":
      if (!value.trim()) return "El correo es obligatorio.";
      if (!EMAIL_REGEX.test(value)) return "Correo no válido.";
      return "";
    case "contactName":
      if (!value.trim()) return "El nombre de contacto es obligatorio.";
      return "";
    case "contactPhone":
      if (!value.trim()) return "El teléfono es obligatorio.";
      if (!PHONE_REGEX.test(value)) return "Teléfono no válido.";
      return "";
    case "contactEmail":
      if (!value.trim()) return "El correo de contacto es obligatorio.";
      if (!EMAIL_REGEX.test(value)) return "Correo no válido.";
      return "";
    case "password":
      if (!value) return "La contraseña es obligatoria.";
      if (value.length < 6) return "Mínimo 6 caracteres.";
      return "";
    default:
      return "";
  }
};

const CreateOngModal = ({ onClose, onCreated }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const successModal = useModal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validate = () => {
    const required = ["organizationName", "cif", "email", "password", "contactName", "contactPhone", "contactEmail"];
    const e = {};
    required.forEach((name) => {
      const msg = validateField(name, form[name]);
      if (msg) e[name] = msg;
    });
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setApiError("");
    try {
      await UserService.createOngProfile(form);
      successModal.open();
    } catch (error) {
      console.error("Error al crear la ONG:", error);
      console.error("Respuesta del backend:", error.response?.data);
      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        JSON.stringify(error.response?.data) ||
        `Error ${error.response?.status || ""}: no se pudo crear la ONG.`;
      setApiError(msg);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.header}>
          <div className={styles.iconCircle}>
            <Building2 size={26} />
          </div>
          <h2 className={styles.title}>Crear ONG</h2>
          <p className={styles.subtitle}>Completa los datos de la nueva organización</p>
        </div>

        <button className={styles.closeBtn} type="button" onClick={onClose}>
          <X size={16} />
        </button>

        <form className={styles.body} onSubmit={handleSubmit}>

          <div className={styles.section}>
            <span className={styles.sectionLabel}>Información de la organización</span>
            <div className={styles.grid}>
              <div className={styles.fullWidth}>
                <InputField
                  label="Nombre de la organización"
                  name="organizationName"
                  value={form.organizationName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.organizationName}
                />
              </div>
              <InputField
                label="CIF"
                name="cif"
                value={form.cif}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.cif}
              />
              <InputField
                label="Correo"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <InputField
                label="Contraseña"
                name="password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                showToggle
              />
            </div>
          </div>

          <div className={styles.section}>
            <span className={styles.sectionLabel}>Datos de contacto</span>
            <div className={styles.grid}>
              <InputField
                label="Nombre de contacto"
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.contactName}
              />
              <InputField
                label="Teléfono"
                name="contactPhone"
                value={form.contactPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.contactPhone}
              />
              <div className={styles.fullWidth}>
                <InputField
                  label="Correo de contacto"
                  name="contactEmail"
                  type="email"
                  value={form.contactEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.contactEmail}
                />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <span className={styles.sectionLabel}>Opcional</span>
            <div className={styles.grid}>
              <InputField
                label="Sitio web"
                name="website"
                value={form.website}
                onChange={handleChange}
              />
              <InputField
                label="Dirección"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.divider} />

          {apiError && <span className={styles.apiError}>{apiError}</span>}

          <div className={styles.actions}>
            <SecondaryButton text="Cancelar" onClick={onClose} />
            <PrimaryButton type="submit" text="Crear ONG" />
          </div>
        </form>

        {successModal.isOpen && (
          <InfoModal
            text="ONG creada exitosamente."
            onClose={() => {
              successModal.close();
              onCreated?.();
              onClose();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CreateOngModal;
