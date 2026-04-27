import { useState, useEffect, useCallback } from "react";
import { Search, Plus } from "lucide-react";
import UserService from "../../../../services/UserService";
import OngProfileModal from "../../../molecules/OngProfileModal/OngProfileModal";
import CreateOngModal from "../../../molecules/CreateOngModal/CreateOngModal";
import styles from "./AdminOngProfiles.module.css";
import Title from "../../../atoms/Title/Title";

const AdminOngProfiles = () => {
  const [ongs, setOngs] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const fetchOngs = useCallback(async () => {
    try {
      const response = await UserService.getAllOngs();
      setOngs(response.gnoProfiles);
    } catch (error) {
      console.error("Error al cargar ONGs:", error);
    }
  }, []);

  useEffect(() => {
    fetchOngs();
  }, [fetchOngs]);

  const filtered = ongs.filter(
    (ong) =>
      ong.organizationName.toLowerCase().includes(search.toLowerCase()) ||
      ong.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Title className={styles.title} title="Perfiles Ongs"/>
        <div className={styles.headerRight}>
          <button className={styles.createBtn} onClick={() => setShowCreate(true)}>
            <Plus size={16} />
            Crear ONG
          </button>
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
      </div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Información</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ong, index) => (
            <tr key={index} className={styles.tableRow}>
              <td>{ong.organizationName}</td>
              <td>{ong.email}</td>
              <td>
                <button className={styles.editButton} onClick={() => setSelected(ong)}>
                  Ver perfil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <OngProfileModal ong={selected} onClose={() => setSelected(null)} />
      )}

      {showCreate && (
        <CreateOngModal
          onClose={() => setShowCreate(false)}
          onCreated={fetchOngs}
        />
      )}
    </div>
  );
};

export default AdminOngProfiles;
