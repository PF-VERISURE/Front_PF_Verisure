import { useState } from "react";
import { ImagePlus, FileText, Tag, MapPin, Building2, CalendarDays, CalendarCheck, Users, Clock, AlignLeft } from "lucide-react";
import FormRow from "../../molecules/FormRow/FormRow";
import SelectField from "../../atoms/SelectField/SelectField";
import TextareaField from "../../atoms/TextareaField/TextareaField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton";
import styles from "./OngNewProject.module.css";
import ProjectService from "../../../services/ProjectService";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Title from "../../atoms/Title/Title";

const CATEGORIA_OPTIONS = [
  { value: 1, label: "Agua limpia y saneamiento" },
  { value: 2, label: "Salud y bienestar" },
  { value: 3, label: "Ciudades y comunidades sostenibles" },
  { value: 4, label: "Energía asequible y no contaminante" },
  { value: 5, label: "Hambre cero" },
  { value: 6, label: "Igualdad de género" },
  { value: 7, label: "Fin de la pobreza" },
  { value: 8, label: "Producción y consumo responsables" },
  { value: 9, label: "Reducción de las desigualdades" },
  { value: 10, label: "Vida submarina" },
];

const MODALIDAD_OPTIONS = [
  { value: "IN_PERSON", label: "Presencial" },
  { value: "HYBRID", label: "Semipresencial" },
  { value: "ONLINE", label: "Virtual" },
];

const initialState = {
  title: "",
  sdgIds: "",
  locationType: "",
  startDate: "",
  endDate: "",
  requiredVolunteers: "",
  totalHours: "",
  description: "",
  impactUnit: "hours",
  address: "",
  city: "",
};

const validateField = (name, value, formState) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const needsLocation = ["IN_PERSON", "HYBRID"].includes(formState.locationType);

  switch (name) {
    case "title":
      if (!value.trim()) return "El nombre del proyecto es obligatorio.";
      if (value.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
      return "";
    case "sdgIds":
      return "";
    case "locationType":
      return value ? "" : "Selecciona la modalidad.";
    case "address":
      if (formState.locationType === "ONLINE") {
        if (!value.trim()) return "El enlace del proyecto online es obligatorio.";
        if (!value.startsWith("http://") && !value.startsWith("https://"))
          return "El enlace del proyecto online debe comenzar por http:// o https://";
        return "";
      }
      return needsLocation && !value.trim() ? "La dirección es obligatoria para esta modalidad." : "";
    case "city":
      return needsLocation && !value.trim() ? "La ciudad es obligatoria para esta modalidad." : "";
    case "startDate":
      if (!value) return "La fecha de inicio es obligatoria.";
      if (new Date(value) < today) return "La fecha no puede estar en el pasado.";
      return "";
    case "endDate":
      if (!value) return "La fecha de finalización es obligatoria.";
      if (new Date(value) < today) return "La fecha no puede estar en el pasado.";
      if (formState.startDate && new Date(value) < new Date(formState.startDate))
        return "La fecha de fin debe ser posterior a la de inicio.";
      return "";
    case "requiredVolunteers":
      if (!value) return "El número de participantes es obligatorio.";
      if (Number(value) < 1) return "Debe haber al menos 1 participante.";
      return "";
    case "totalHours":
      if (!value) return "Las horas son obligatorias.";
      if (Number(value) < 1) return "Debe haber al menos 1 hora.";
      return "";
    case "description":
      if (!value.trim()) return "La descripción es obligatoria.";
      if (value.trim().length < 10) return "La descripción debe tener al menos 10 caracteres.";
      return "";
    default:
      return "";
  }
};

const OngNewProject = () => {
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(initialState);

  const projectService = ProjectService();
  const infoModal = useModal();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    const validateNow = ["locationType", "startDate", "endDate"].includes(name);
    if (validateNow || errors[name]) {
      const updated = { ...errors, [name]: validateField(name, value, newForm) };
      if (name === "locationType") {
        updated.address = errors.address ? validateField("address", form.address, newForm) : "";
        updated.city = errors.city ? validateField("city", form.city, newForm) : "";
      }
      setErrors(updated);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value, form) }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: "La imagen no puede superar 5 MB." }));
      return;
    }
    setErrors((prev) => ({ ...prev, image: "" }));
    setImage(file);
  };

  const handleNumberKeyDown = (e, fieldName) => {
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
    if (!allowed.includes(e.key) && !/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setErrors((prev) => ({ ...prev, [fieldName]: "Este campo solo acepta números." }));
    }
  };

  const validate = () => {
    const allFields = ["title", "locationType", "address", "city",
      "startDate", "endDate", "requiredVolunteers", "totalHours", "description"];
    const e = {};
    allFields.forEach((name) => {
      const msg = validateField(name, form[name], form);
      if (msg) e[name] = msg;
    });
    if (image && image.size > 5 * 1024 * 1024) e.image = "La imagen no puede superar 5 MB.";
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

    try {
      const payload = {
        title: form.title,
        description: form.description,
        totalHours: Number(form.totalHours),
        requiredVolunteers: Number(form.requiredVolunteers),
        startDate: form.startDate + "T00:00:00Z",
        endDate: form.endDate + "T00:00:00Z",
        locationType: form.locationType,
        impactUnit: "hours",
        address: form.address,
        city: form.city,
        sdgIds: form.sdgIds ? [Number(form.sdgIds)] : [],
      };

      const formData = new FormData();
      formData.append("project", new Blob([JSON.stringify(payload)], { type: "application/json" }));
      if (image) formData.append("file", image);

      await projectService.createProject(formData);
      setForm({ ...initialState });
      setImage(null);
      infoModal.open();
    } catch (error) {
      console.error("Error al crear el proyecto", error);
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Title className={styles.title} title="Registro de proyecto" />

      <div className={styles.formTable}>
        <FormRow label="Nombre del proyecto" icon={FileText}>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.title ? styles.inputError : ""}`}
          />
          {errors.title && <span className={styles.errorText}>{errors.title}</span>}
        </FormRow>

        <FormRow label="Categoría" icon={Tag}>
          <SelectField
            name="sdgIds"
            value={form.sdgIds}
            onChange={handleChange}
            options={CATEGORIA_OPTIONS}
            placeholder="Seleccionar"
            isError={!!errors.sdgIds}
          />
          {errors.sdgIds && <span className={styles.errorText}>{errors.sdgIds}</span>}
        </FormRow>

        <FormRow label="Modalidad" icon={MapPin}>
          <SelectField
            name="locationType"
            value={form.locationType}
            onChange={handleChange}
            options={MODALIDAD_OPTIONS}
            placeholder="Seleccionar"
            isError={!!errors.locationType}
          />
          {errors.locationType && <span className={styles.errorText}>{errors.locationType}</span>}
        </FormRow>

        <FormRow label="Dirección" icon={MapPin}>
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.address ? styles.inputError : ""}`}
          />
          {errors.address && <span className={styles.errorText}>{errors.address}</span>}
        </FormRow>

        <FormRow label="Ciudad" icon={Building2}>
          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.city ? styles.inputError : ""}`}
          />
          {errors.city && <span className={styles.errorText}>{errors.city}</span>}
        </FormRow>

        <FormRow label="Fecha de Inicio" icon={CalendarDays}>
          <input
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={handleChange}
            className={`${styles.input} ${errors.startDate ? styles.inputError : ""}`}
          />
          {errors.startDate && <span className={styles.errorText}>{errors.startDate}</span>}
        </FormRow>

        <FormRow label="Fecha de finalización" icon={CalendarCheck}>
          <input
            name="endDate"
            type="date"
            value={form.endDate}
            onChange={handleChange}
            className={`${styles.input} ${errors.endDate ? styles.inputError : ""}`}
          />
          {errors.endDate && <span className={styles.errorText}>{errors.endDate}</span>}
        </FormRow>

        <FormRow label="Participantes" icon={Users}>
          <input
            name="requiredVolunteers"
            type="number"
            min="1"
            value={form.requiredVolunteers}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={(e) => handleNumberKeyDown(e, "requiredVolunteers")}
            className={`${styles.input} ${errors.requiredVolunteers ? styles.inputError : ""}`}
          />
          {errors.requiredVolunteers && <span className={styles.errorText}>{errors.requiredVolunteers}</span>}
        </FormRow>

        <FormRow label="Horas" icon={Clock}>
          <input
            name="totalHours"
            type="number"
            min="1"
            value={form.totalHours}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={(e) => handleNumberKeyDown(e, "totalHours")}
            className={`${styles.input} ${errors.totalHours ? styles.inputError : ""}`}
          />
          {errors.totalHours && <span className={styles.errorText}>{errors.totalHours}</span>}
        </FormRow>

        <FormRow label="Imagen" icon={ImagePlus}>
          <label className={styles.fileLabel}>
            <span className={styles.fileBtn}><ImagePlus size={15} />Seleccionar imagen</span>
            <span className={styles.fileName}>{image ? image.name : "Ningún archivo seleccionado"}</span>
            <input
              name="image"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleImageChange}
              className={styles.fileInput}
            />
          </label>
          <span className={styles.fileHint}>PNG, JPG o WEBP · Máx. 5 MB</span>
          {errors.image && <span className={styles.errorText}>{errors.image}</span>}
        </FormRow>

        <FormRow label="Descripción" icon={AlignLeft}>
          <TextareaField
            name="description"
            value={form.description}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            isError={!!errors.description}
          />
          {errors.description && <span className={styles.errorText}>{errors.description}</span>}
        </FormRow>
      </div>

      <div className={styles.actions}>
        <PrimaryButton text="Guardar" type="submit" />
        <SecondaryButton text="Cancelar" />
      </div>

      {infoModal.isOpen && (
        <InfoModal
          text={
            <div>
              <div>Creación exitosa! </div>
              <div>Pronto revisaremos el proyecto</div>
  
            </div>
          }
          onClose={() => {
            infoModal.close();
            navigate("/ongs/proyectos");
          }}
        />
      )}
    </form>
  );
};

export default OngNewProject;
