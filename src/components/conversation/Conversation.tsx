import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { ConversationHeader } from '~/components/conversation/header';
import { ConversationSidebar } from '~/components/conversation/sidebar';

export const Conversation = () => {
  return (
    <Grid
      templateAreas={`
        "nav header"
        "nav main"
        "nav main"`}
      gridTemplateColumns="2fr 3fr"
      gridTemplateRows="50px 1fr 1fr"
      height="full"
      as="section"
    >
      <GridItem backgroundColor="gray.600" area="header" as="header">
        <ConversationHeader />
      </GridItem>
      <GridItem area="main" as="main">
        <Outlet />
      </GridItem>
      <GridItem area="nav" as="aside">
        <ConversationSidebar />
      </GridItem>
    </Grid>
  );
};
