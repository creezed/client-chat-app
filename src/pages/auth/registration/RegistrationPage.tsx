import { RegisterForm } from "@components/forms/auth/register";

import styles from "../auth-page.module.scss";

const RegistrationPage = () => {
    return (
        <section className={styles.Auth}>
            <RegisterForm />
        </section>
    );
};

export default RegistrationPage;
