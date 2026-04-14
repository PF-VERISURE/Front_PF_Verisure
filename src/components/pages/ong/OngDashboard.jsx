import { Outlet } from "react-router-dom";
import OngSidebar from "../../organisms/OngSidebar/OngSidebar";
import styles from "./OngDashboard.module.css";

const OngDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <OngSidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default OngDashboard;
