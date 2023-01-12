import { Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Conversation } from '~/components/asides/conversation';
import { Sidebar } from '~/layout/sidebar';

export const Layout = () => {
  return (
    <Grid
      gridTemplateColumns="100px 400px 1fr"
      gridTemplateRows="1fr"
      height="full"
      maxHeight="full"
      as="section"
    >
      <Sidebar />
      <Conversation />
      <Outlet />
    </Grid>
  );
};
