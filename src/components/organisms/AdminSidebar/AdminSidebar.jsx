import { useState } from "react";
import {
    LayoutGrid,
    ChartColumn,
    Building2,
    Users,
    UserRound,
    FolderOpen,
    BookOpenText,
} from "lucide-react";
import SidebarMainItem from "../../molecules/SidebarMainItem/SidebarMainItem";
import SidebarSubItem from "../../molecules/SidebarSubItem/SidebarSubItem";
import styles from "./AdminSidebar.module.css";

const AdminSidebar = () => {
    const [ongsOpen, setOngsOpen] = useState(false);
    const [voluntariosOpen, setVoluntariosOpen] = useState(false);
    return (
        <aside className={styles.sidebar}>
            <div className={styles.content}>
                <SidebarMainItem icon={LayoutGrid} label="Panel" />
                <SidebarMainItem icon={ChartColumn} label="Métricas" />

                <div className={styles.group}>
                    <SidebarMainItem
                        icon={Building2}
                        label="ONGs"
                        hasDropdown
                        isOpen={ongsOpen}
                        onClick={() => setOngsOpen(!ongsOpen)}
                    />

                    {ongsOpen && (
                        <div className={styles.submenu}>
                            <SidebarSubItem icon={UserRound} label="Perfiles" />
                            <SidebarSubItem icon={FolderOpen} label="Proyectos" />
                        </div>
                    )}
                </div>

                <div className={styles.group}>
                    <SidebarMainItem
                        icon={Users}
                        label="Voluntarios"
                        hasDropdown
                        isOpen={voluntariosOpen}
                        onClick={() => setVoluntariosOpen(!voluntariosOpen)}
                    />

                    {voluntariosOpen && (
                        <div className={styles.submenu}>
                            <SidebarSubItem icon={UserRound} label="Perfiles" />
                            <SidebarSubItem icon={BookOpenText} label="Programas" />
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;