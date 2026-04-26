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
                <SidebarMainItem
                    icon={FilePlus}
                    label="Registrar Proyectos"
                    isActive={location.pathname === "/ongs/nuevo_proyecto"}
                    onClick={() => navigate("/ongs/nuevo_proyecto")}
                />
                <SidebarMainItem
                    icon={FolderOpen}
                    label="Proyectos"
                    isActive={location.pathname === "/ongs/proyectos"}
                    onClick={() => navigate("/ongs/proyectos")}
                />
            </div>
        </aside>
    );
};

export default OngSidebar;
