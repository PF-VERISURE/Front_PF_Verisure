import AuthTemplate from "../../templates/AuthTemplate.jsx";
import LoginForm from "../../molecules/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.page}>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </div>
  );
}

export default Login;