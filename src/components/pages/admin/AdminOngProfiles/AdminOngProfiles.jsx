import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import UserService from "../../../../services/UserService";
import OngProfileModal from "../../../molecules/OngProfileModal/OngProfileModal";
import styles from "./AdminOngProfiles.module.css";

const AdminOngProfiles = () => {
  const [ongs, setOngs] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await UserService.getAllOngs();
        setOngs(response.gnoProfiles);
      } catch (error) {
        console.error("Error al cargar ONGs:", error);
      }
    };
    fetchOngs();
  }, []);

  const filtered = ongs.filter(
    (ong) =>
      ong.organizationName.toLowerCase().includes(search.toLowerCase()) ||
      ong.email.toLowerCase().includes(search.toLowerCase())
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
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ong, index) => (
            <tr key={index} className={styles.tableRow}>
              <td>{ong.organizationName}</td>
              <td>{ong.email}</td>
              <td>
                <button className={styles.editButton} onClick={() => setSelected(ong)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <OngProfileModal ong={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default AdminOngProfiles;
