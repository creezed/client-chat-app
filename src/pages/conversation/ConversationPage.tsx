import { lazy } from 'react';
import { Conversation } from '~/components/conversation';

const ConversationPage = () => {
  return <Conversation />;
};

// eslint-disable-next-line import/no-default-export
export default ConversationPage;

export const ConversationPageLazy = lazy(
  () => import('~/pages/conversation/ConversationPage'),
);
