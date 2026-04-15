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
                <div className={location.pathname === "/voluntario" ? styles.activeItem : ""}>
                    <SidebarMainItem
                        icon={Compass}
                        label="Explorar Programas"
                        onClick={() => navigate("/voluntario")}
                    />
                </div>

                <div className={location.pathname === "/voluntario/proyectos" ? styles.activeItem : ""}>
                    <SidebarMainItem
                        icon={BookOpen}
                        label="Mis Programas"
                        onClick={() => navigate("/voluntario/proyectos")}
                    />
                </div>

                <div className={location.pathname === "/voluntario/certificados" ? styles.activeItem : ""}>
                    <SidebarMainItem
                        icon={Award}
                        label="Mis Certificados"
                        onClick={() => navigate("/voluntario/certificados")}
                    />
                </div>
            </div>
        </aside>
    );
};

export default VolonteerSidebar;
