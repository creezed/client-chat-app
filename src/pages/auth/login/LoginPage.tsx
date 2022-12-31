import { RegisterForm } from "components/forms";

import styles from "./auth-page.module.scss";

const LoginPage = () => {
    return (
        <section className={styles.Auth}>
            <RegisterForm />
        </section>
    );
};

export default LoginPage;
