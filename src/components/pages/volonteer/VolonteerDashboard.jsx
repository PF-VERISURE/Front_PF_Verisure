import { Outlet } from "react-router-dom";
import VolonteerSidebar from "../../organisms/VolonteerSidebar/VolonteerSidebar";
import styles from "./VolonteerDashboard.module.css";

const VolonteerDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <VolonteerSidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default VolonteerDashboard;
