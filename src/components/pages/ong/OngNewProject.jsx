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
  { value: 8, label: "Producción y consumo responsables"},
  { value: 9, label: "Reducción de las desigualdades"},
  { value: 10, label: "vida submarina"},

]

const MODALIDAD_OPTIONS = [
  { value: "IN_PERSON", label: "Presencial" },
  { value: "HYBRID", label: "Semipresencial" },
  { value: "ONLINE", label: "Virtual" },
];

const OngNewProject = () => {
  const [image, setImage] = useState(null);
  const [dateError, setDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [form, setForm] = useState({
    title:"",
    sdgIds:"",
    locationType:"",
    startDate:"",
    endDate:"",
    requiredVolunteers:"",
    totalHours:"",
    description:"",
    impactUnit: "hours",
    address:"",
    city:"",
  });

  const initialState = {
  title:"",
  sdgIds:"",
  locationType:"",
  startDate:"",
  endDate:"",
  requiredVolunteers:"",
  totalHours:"",
  description:"",
  impactUnit: "hours",
  address:"",
  city:"",
};

  const projectService = ProjectService(); 

  const infoModal = useModal();
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim() || !form.startDate ||
        !form.endDate || !form.locationType || !form.requiredVolunteers || !form.totalHours) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(form.startDate) < today) {
      setDateError("La fecha no puede estar en el pasado.");
      return;
    }
    if (new Date(form.endDate) < today) {
      setEndDateError("La fecha no puede estar en el pasado.");
      return;
    }

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
      sdgIds: form.sdgIds ? [Number(form.sdgIds)] : []
    };

    const formData = new FormData();
      formData.append("project", new Blob([JSON.stringify(payload)], { type: "application/json" }));
      if (image) formData.append("file", image);

      const data = await projectService.createProject(formData);
      setForm({ ...initialState });
      setImage(null);
      infoModal.open(); 

  } catch (error) {
    console.error("Error al crear el proyecto", error);
  }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "startDate") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(value);
      setDateError(selected < today ? "La fecha no puede estar en el pasado." : "");
    }

    if (name === "endDate") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(value);
      setEndDateError(selected < today ? "La fecha no puede estar en el pasado." : "");
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Title className={styles.title} title="Registro de proyecto"/>

      <div className={styles.formTable}>
        <FormRow label="Nombre del proyecto" icon={FileText}>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Categoría" icon={Tag}>
          <SelectField
            name="sdgIds"
            value={form.sdgIds}
            onChange={handleChange}
            options={CATEGORIA_OPTIONS}
            placeholder="Seleccionar"
          />
        </FormRow>

        <FormRow label="Modalidad" icon={MapPin}>
          <SelectField
            name="locationType"
            value={form.locationType}
            onChange={handleChange}
            options={MODALIDAD_OPTIONS}
            placeholder="Seleccionar"
          />
        </FormRow>

        <FormRow label="Dirección" icon={MapPin}>
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Ciudad" icon={Building2}>
          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Fecha de Inicio" icon={CalendarDays}>
          <input
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={handleChange}
            className={`${styles.input} ${dateError ? styles.inputError : ""}`}
          />
          {dateError && <span className={styles.errorText}>{dateError}</span>}
        </FormRow>

        <FormRow label="Fecha de finalización" icon={CalendarCheck}>
          <input
            name="endDate"
            type="date"
            value={form.endDate}
            onChange={handleChange}
            className={`${styles.input} ${endDateError ? styles.inputError : ""}`}
          />
          {endDateError && <span className={styles.errorText}>{endDateError}</span>}
        </FormRow>

        <FormRow label="Participantes" icon={Users}>
          <input
            name="requiredVolunteers"
            type="text"
            value={form.requiredVolunteers}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Horas" icon={Clock}>
          <input
            name="totalHours"
            type="text"
            value={form.totalHours}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Imagen" icon={ImagePlus}>
          <label className={styles.fileLabel}>
            <span className={styles.fileBtn}><ImagePlus size={15} />Seleccionar imagen</span>
            <span className={styles.fileName}>{image ? image.name : "Ningún archivo seleccionado"}</span>
            <input
              name="image"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={(e) => setImage(e.target.files[0])}
              className={styles.fileInput}
            />
          </label>
          <span className={styles.fileHint}>PNG, JPG o WEBP · Máx. 5 MB</span>
        </FormRow>

        <FormRow label="Descripción" icon={AlignLeft}>
          <TextareaField
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
          />
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
              <div>Proyecto creado exitosamente!</div>
  
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