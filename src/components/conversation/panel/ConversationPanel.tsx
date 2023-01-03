import { useParams } from "react-router-dom";

export const ConversationPanel = () => {
    const { id } = useParams();
    return <main>{id}</main>;
};
