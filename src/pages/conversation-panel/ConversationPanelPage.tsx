import { Container } from '@chakra-ui/react';
import { lazy } from 'react';
import { ConversationPanel } from '~/components/conversation/panel';

const ConversationPanelPage = () => {
  return (
    <Container maxWidth="1200px" as="section">
      <ConversationPanel />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default ConversationPanelPage;

export const ConversationPanelPageLazy = lazy(
  () => import('~/pages/conversation-panel/ConversationPanelPage'),
);
