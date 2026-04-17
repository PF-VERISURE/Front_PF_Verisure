import { useNavigate, useLocation } from "react-router-dom";
import { FilePlus, FolderOpen } from "lucide-react";
import SidebarMainItem from "../../molecules/SidebarMainItem/SidebarMainItem";
import styles from "./OngSidebar.module.css";

const OngSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.content}>
                <div className={location.pathname === "/ongs/nuevo_proyecto" ? styles.activeItem : ""}>
                    <SidebarMainItem
                        icon={FilePlus}
                        label="Registrar Proyectos"
                        onClick={() => navigate("/ongs/nuevo_proyecto")}
                    />
                </div>

                <div className={location.pathname === "/ongs/proyecto" ? styles.activeItem : ""}>
                    <SidebarMainItem
                        icon={FolderOpen}
                        label="Proyectos"
                        onClick={() => navigate("/ongs/proyectos")}
                    />
                </div>
            </div>
        </aside>
    );
};

export default OngSidebar;
