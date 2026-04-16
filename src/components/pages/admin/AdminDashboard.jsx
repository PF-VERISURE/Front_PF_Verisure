import { Outlet } from "react-router-dom";
import AdminSidebar from "../../organisms/AdminSidebar/AdminSidebar";
import styles from "./AdminDashboard.module.css";
import Footer from "../../organisms/Footer/Footer";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <AdminSidebar />
      <main className={styles.content}>
        <Outlet />
        <Footer/>
      </main>
      
      

    </div>
  );
};

export default AdminDashboard;