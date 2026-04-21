import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import UserService from "../../../../services/UserService";
import styles from "./AdminVolunteerProfile.module.css";

const AdminVolontarioPerfiles = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const result = await UserService.getAllEmployees();
        setVolunteers(result.data);
      } catch (error) {
        console.error("Error al cargar voluntarios:", error);
      }
    };
    fetchVolunteers();
  }, []);

  const filtered = volunteers.filter(
    (v) =>
      `${v.firstName} ${v.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>VOLUNTARIOS PERFILES</h1>
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
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((v) => (
            <tr key={v.id} className={styles.tableRow}>
              <td>{v.firstName} {v.lastName}</td>
              <td>{v.email}</td>
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

export default AdminVolontarioPerfiles;
