import styles from "./AuthTemplate.module.css";
import loginImage from "../../assets/Logologin.jpg";


function AuthTemplate({ children }) {
  return (
    <section className={styles.authContainer}>
      <div className={styles.leftPanel}>
        {children}
      </div>

      <div
        className={styles.rightPanel}
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>
    </section>
  );
}

export default AuthTemplate;