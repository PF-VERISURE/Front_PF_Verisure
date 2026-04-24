import { useState } from "react";
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
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Title className={styles.title} title="Registro de proyecto"/>

      <div className={styles.formTable}>
        <FormRow label="Nombre del proyecto">
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Categoría">
          <SelectField
            name="sdgIds"
            value={form.sdgIds}
            onChange={handleChange}
            options={CATEGORIA_OPTIONS}
            placeholder="Seleccionar"
          />
        </FormRow>

        <FormRow label="Modalidad">
          <SelectField
            name="locationType"
            value={form.locationType}
            onChange={handleChange}
            options={MODALIDAD_OPTIONS}
            placeholder="Seleccionar"
          />
        </FormRow>

        <FormRow label="Dirección">
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Ciudad">
          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Fecha de Inicio">
          <input
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Fecha de finalización">
          <input
            name="endDate"
            type="date"
            value={form.endDate}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Participantes">
          <input
            name="requiredVolunteers"
            type="text"
            value={form.requiredVolunteers}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Horas">
          <input
            name="totalHours"
            type="text"
            value={form.totalHours}
            onChange={handleChange}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Imagen">
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className={styles.input}
          />
        </FormRow>

        <FormRow label="Descripción">
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
              <div>Ya está disponible para voluntarios.</div>
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