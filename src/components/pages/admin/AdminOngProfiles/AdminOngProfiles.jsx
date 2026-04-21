import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./AdminOngProfiles.module.css";

const mockOngs = [
  { id: 1, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 2, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 3, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 4, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 5, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 6, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 7, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
  { id: 8, nombre: "ONG1", correo: "ejemplo@gmail.com", estado: "Activo" },
];

const AdminOngProfiles = () => {
  const [search, setSearch] = useState("");

  const filtered = mockOngs.filter(
    (ong) =>
      ong.nombre.toLowerCase().includes(search.toLowerCase()) ||
      ong.correo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>ONGS PERFILES</h1>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ong) => (
            <tr key={ong.id} className={styles.tableRow}>
              <td>{ong.nombre}</td>
              <td>{ong.correo}</td>
              <td>{ong.estado}</td>
              <td>
                <button className={styles.editButton}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOngProfiles;
