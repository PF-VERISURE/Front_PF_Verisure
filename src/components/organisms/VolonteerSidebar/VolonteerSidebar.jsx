import { useNavigate, useLocation } from "react-router-dom";
import { Compass, BookOpen, Award } from "lucide-react";
import SidebarMainItem from "../../molecules/SidebarMainItem/SidebarMainItem";
import styles from "./VolonteerSidebar.module.css";

const VolonteerSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.content}>
                <SidebarMainItem
                    icon={Compass}
                    label="Explorar Proyectos"
                    isActive={location.pathname === "/voluntario/proyectos"}
                    onClick={() => navigate("/voluntario/proyectos")}
                />
                <SidebarMainItem
                    icon={BookOpen}
                    label="Mis Voluntariados"
                    isActive={location.pathname === "/voluntario/mis_proyectos"}
                    onClick={() => navigate("/voluntario/mis_proyectos")}
                />
                <SidebarMainItem
                    icon={Award}
                    label="Mis Certificados"
                    isActive={location.pathname === "/voluntario/certificados"}
                    onClick={() => navigate("/voluntario/certificados")}
                />
            </div>
        </aside>
    );
};

export default VolonteerSidebar;
