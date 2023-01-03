import { Avatar, Text } from "@chakra-ui/react";
import { IConversation } from "@utils/types";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./сonversation-sidebar-item.module.scss";

export const ConversationSidebarItem: FC<{ conversation: IConversation }> = ({ conversation }) => {
    return (
        <Link to={`/conversation/${conversation.id}`} className={styles.sidebarItem}>
            <figure className={styles.sidebarItemMessage}>
                <Avatar
                    size='lg'
                    name={`${conversation.firstName} ${conversation.lastName}`}
                    src={conversation.avatar}
                />
                <figcaption>
                    <Text noOfLines={1}>
                        {conversation.firstName} {conversation.lastName}
                    </Text>
                    <Text noOfLines={1}>{conversation.lastMessage}</Text>
                </figcaption>
            </figure>
        </Link>
    );
};