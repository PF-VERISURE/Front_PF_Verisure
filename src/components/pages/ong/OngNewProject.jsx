import { useState } from "react";
import FormRow from "../../molecules/FormRow/FormRow";
import SelectField from "../../atoms/SelectField/SelectField";
import TextareaField from "../../atoms/TextareaField/TextareaField";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../atoms/SecondaryButton/SecondaryButton";
import styles from "./OngNewProject.module.css";

const MODALIDAD_OPTIONS = [
  { value: "presencial", label: "Presencial" },
  { value: "semipresencial", label: "Semipresencial" },
  { value: "virtual", label: "Virtual" },
];

const OngNuevoProyecto = () => {
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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ficha de Registro proyecto</h2>

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
          <input
            name="categoria"
            type="text"
            value={form.categoria}
            onChange={handleChange}
            className={styles.input}
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

        <FormRow label="Fecha de Inicio">
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
        <SecondaryButton text="Cancelar" />
      </div>
    </div>
  );
};

export default OngNuevoProyecto;
