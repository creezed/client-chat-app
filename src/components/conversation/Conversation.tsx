import { ConversationHeader } from "@components/conversation/header";
import { ConversationSidebar } from "@components/conversation/sidebar";
import { Outlet } from "react-router-dom";

import styles from "./conversation.module.scss";

export const Conversation = () => {
    return (
        <section className={styles.Conversation}>
            <ConversationHeader />
            <Outlet />
            <ConversationSidebar />
        </section>
    );
};
