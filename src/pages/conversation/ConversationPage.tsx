import { Flex, Grid } from '@chakra-ui/react';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '~/layout';
import { Conversation } from '~/components/asides/conversation';

const ConversationPage = () => {
  return (
    <Layout>
      <Grid
        gridTemplateColumns="400px 1fr"
        gridTemplateRows="1fr"
        height="full"
        maxHeight="full"
        overflow="hidden"
        as="section"
      >
        <Conversation />
        <Flex
          as="section"
          flexDirection="column"
          height="full"
          maxHeight="100vh"
          backgroundColor="gray.50"
        >
          <Outlet />
        </Flex>
      </Grid>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default ConversationPage;

export const ConversationPageLazy = lazy(
  () => import('~/pages/conversation/ConversationPage'),
);
