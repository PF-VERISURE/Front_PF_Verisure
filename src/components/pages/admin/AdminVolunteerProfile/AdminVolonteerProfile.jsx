import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import UserService from "../../../../services/UserService";
import VolunteerProfileModal from "../../../molecules/VolunteerProfileModal/VolunteerProfileModal";
import styles from "./AdminVolunteerProfile.module.css";
import Title from "../../../atoms/Title/Title";

const AdminVolontarioPerfiles = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

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
        <Title className={styles.title} title="Perfiles Voluntarios"/>
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
                <button className={styles.editButton} onClick={() => setSelected(v)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <VolunteerProfileModal volunteer={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default AdminVolontarioPerfiles;
