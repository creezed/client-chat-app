import { LoginForm } from "@components/forms/auth/login/LoginForm";

import styles from "../auth-page.module.scss";

const LoginPage = () => {
    return (
        <section className={styles.Auth}>
            <LoginForm />
        </section>
    );
};

export default LoginPage;
