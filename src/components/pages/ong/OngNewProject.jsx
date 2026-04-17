import { useState } from "react";
import FormRow from "../../molecules/FormRow/FormRow";
import SelectField from "../../atoms/SelectField/SelectField";
import TextareaField from "../../atoms/TextareaField/TextareaField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton";
import styles from "./OngNewProject.module.css";

const CATEGORIA_OPTIONS = [
  { value: "Agua limpia y saneamiento", label: "Agua limpia y saneamiento" },
  { value: "Salud y bienestar", label: "Salud y bienestar" },
  { value: "Ciudades y comunidades sostenibles", label: "Ciudades y comunidades sostenibles" },
  { value: "Energía asequible y no contaminante", label: "Energía asequible y no contaminante" },
  { value: "Hambre cero", label: "Hambre cero" },
  { value: "Igualdad de género", label: "Igualdad de género" },
  { value: "Fin de la pobreza", label: "Fin de la pobreza" },
  { value: "Producción y consumo responsables", label: "Producción y consumo responsables" },
  { value: "Reducción de las desigualdades", label: "Reducción de las desigualdades" },
  { value: "Vida submarina", label: "Vida submarina" },
];

const MODALIDAD_OPTIONS = [
  { value: "presencial", label: "Presencial" },
  { value: "semipresencial", label: "Semipresencial" },
  { value: "virtual", label: "Virtual" },
];

const OngNewProject = () => {
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    modalidad: "",
    fechaInicio: "",
    fechaFin: "",
    participantes: "",
    horas: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", form);
  };

  const handleCancel = () => {
    setForm({
      nombre: "",
      categoria: "",
      modalidad: "",
      fechaInicio: "",
      fechaFin: "",
      participantes: "",
      horas: "",
      descripcion: "",
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ficha de registro de proyecto</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.formTable}>
          <FormRow label="Nombre del proyecto">
            <input
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              className={styles.input}
            />
          </FormRow>

          <FormRow label="Categoría">
            <SelectField
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              options={CATEGORIA_OPTIONS}
              placeholder="Seleccionar"
            />
          </FormRow>

          <FormRow label="Modalidad">
            <SelectField
              name="modalidad"
              value={form.modalidad}
              onChange={handleChange}
              options={MODALIDAD_OPTIONS}
              placeholder="Seleccionar"
            />
          </FormRow>

          <FormRow label="Fecha de inicio">
            <input
              name="fechaInicio"
              type="date"
              value={form.fechaInicio}
              onChange={handleChange}
              className={styles.input}
            />
          </FormRow>

          <FormRow label="Fecha de finalización">
            <input
              name="fechaFin"
              type="date"
              value={form.fechaFin}
              onChange={handleChange}
              className={styles.input}
            />
          </FormRow>

          <FormRow label="Participantes">
            <input
              name="participantes"
              type="text"
              value={form.participantes}
              onChange={handleChange}
              className={styles.input}
            />
          </FormRow>

          <FormRow label="Horas">
            <input
              name="horas"
              type="text"
              value={form.horas}
              onChange={handleChange}
              className={styles.input}
            />
          </FormRow>

          <FormRow label="Descripción">
            <TextareaField
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              rows={4}
            />
          </FormRow>
        </div>

        <div className={styles.actions}>
          <PrimaryButton text="Guardar" type="submit" />
          <SecondaryButton text="Cancelar" type="button" onClick={handleCancel} />
        </div>
      </form>
    </div>
  );
};

export default OngNewProject;