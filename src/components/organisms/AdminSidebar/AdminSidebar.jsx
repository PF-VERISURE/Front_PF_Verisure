import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    LayoutGrid,
    ChartColumn,
    FolderOpen,
    Users,
    Building2,
    UserRound,
} from "lucide-react";
import SidebarMainItem from "../../molecules/SidebarMainItem/SidebarMainItem";
import SidebarSubItem from "../../molecules/SidebarSubItem/SidebarSubItem";
import styles from "./AdminSidebar.module.css";

const AdminSidebar = () => {
    const [perfilesOpen, setPerfilesOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.content}>
                <SidebarMainItem
                    icon={LayoutGrid}
                    label="Panel"
                    onClick={() => navigate("/admin")}
                />
                <SidebarMainItem
                    icon={ChartColumn}
                    label="Métricas"
                    onClick={() => navigate("/admin/metricas")}
                />
                <SidebarMainItem
                    icon={FolderOpen}
                    label="Proyectos"
                    onClick={() => navigate("/admin/proyectos")}
                />

                <div className={styles.group}>
                    <SidebarMainItem
                        icon={Users}
                        label="Perfiles de usuarios"
                        hasDropdown
                        isOpen={perfilesOpen}
                        onClick={() => setPerfilesOpen(!perfilesOpen)}
                    />
                    {perfilesOpen && (
                        <div className={styles.submenu}>
                            <SidebarSubItem
                                icon={Building2}
                                label="ONGs"
                                onClick={() => navigate("/admin/ongs/perfiles")}
                            />
                            <SidebarSubItem
                                icon={UserRound}
                                label="Voluntarios"
                                onClick={() => navigate("/admin/voluntario/perfiles")}
                            />
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
