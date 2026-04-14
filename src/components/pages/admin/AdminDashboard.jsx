import { Outlet } from "react-router-dom";
import AdminSidebar from "../../organisms/AdminSidebar/AdminSidebar";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <AdminSidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;