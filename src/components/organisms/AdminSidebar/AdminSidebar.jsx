import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
    const { pathname } = useLocation();

    const isPerfilesActive =
        perfilesOpen ||
        pathname.startsWith("/admin/ongs") ||
        pathname.startsWith("/admin/voluntario");

    useEffect(() => {
        if (isPerfilesActive) setPerfilesOpen(true);
    }, [isPerfilesActive]);

    return (
        <aside className={styles.sidebar}>
            <div className={styles.content}>
                <SidebarMainItem
                    icon={LayoutGrid}
                    label="Dashboard"
                    isActive={pathname === "/admin"}
                    onClick={() => navigate("/admin")}
                />
                <SidebarMainItem
                    icon={ChartColumn}
                    label="Métricas"
                    isActive={pathname === "/admin/metricas"}
                    onClick={() => navigate("/admin/metricas")}
                />
                <SidebarMainItem
                    icon={FolderOpen}
                    label="Proyectos"
                    isActive={pathname === "/admin/proyectos"}
                    onClick={() => navigate("/admin/proyectos")}
                />

                <div className={styles.group}>
                    <SidebarMainItem
                        icon={Users}
                        label="Usuarios"
                        hasDropdown
                        isOpen={perfilesOpen}
                        isActive={isPerfilesActive}
                        onClick={() => setPerfilesOpen(!perfilesOpen)}
                    />
                    {perfilesOpen && (
                        <div className={styles.submenu}>
                            <SidebarSubItem
                                icon={Building2}
                                label="ONGs"
                                isActive={pathname === "/admin/ongs/perfiles"}
                                onClick={() => navigate("/admin/ongs/perfiles")}
                            />
                            <SidebarSubItem
                                icon={UserRound}
                                label="Voluntarios"
                                isActive={pathname === "/admin/voluntario/perfiles"}
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
