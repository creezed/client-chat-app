import { Grid } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { Sidebar } from '~/layout/sidebar';

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Grid
      gridTemplateColumns="100px 1fr"
      gridTemplateRows="1fr"
      height="full"
      maxHeight="full"
      as="section"
    >
      <Sidebar />
      {children}
    </Grid>
  );
};
