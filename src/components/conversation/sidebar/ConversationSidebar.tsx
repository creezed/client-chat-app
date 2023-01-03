import { useActions } from "../../../hooks/redux/useActions";
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast
} from "@chakra-ui/react";
import { ConversationSidebarItem } from "@components/conversation/sidebar/item";
import { IConversation } from "@utils/types";
import { AiOutlineSearch } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

import styles from "./сonversation-sidebar.module.scss";

const fakeData: IConversation[] = [
    {
        id: "1",
        avatar: "https://bit.ly/kent-c-dodds",
        firstName: "Kent",
        lastName: "Dodds",
        lastMessage: "good!"
    },
    {
        id: "2",
        avatar: "https://bit.ly/ryan-florence",
        firstName: "Ryan",
        lastName: "Florence",
        lastMessage: "well!"
    },
    {
        id: "3",
        avatar: "https://bit.ly/code-beast",
        firstName: "Christian",
        lastName: "Nwamba",
        lastMessage: "good work!"
    }
];

export const ConversationSidebar = () => {
    const { logout } = useActions();
    const toast = useToast();

    const logOut = () => {
        logout();
        toast({
            title: "Success",
            description: "Success log out",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right"
        });
    };

    return (
        <aside className={styles.sidebar}>
            <header className={styles.sidebarHeader}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<CiSettings className={styles.sidebarSettingIcon} />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem onClick={logOut}>log out</MenuItem>
                    </MenuList>
                </Menu>
                <InputGroup>
                    <Input placeholder={"Поиск"} />
                    <InputLeftElement width='2rem'>
                        <AiOutlineSearch className={styles.sidebarSearchIcon} />
                    </InputLeftElement>
                </InputGroup>
            </header>
            <ul className={styles.sidebarChatList}>
                {fakeData.map(conversation => (
                    <ConversationSidebarItem conversation={conversation} key={conversation.id} />
                ))}
            </ul>
        </aside>
    );
};
