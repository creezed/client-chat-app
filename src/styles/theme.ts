import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
};

const styles: Styles = {
  global: {
    'html, #root': {
      maxHeight: '100vh',
      height: 'full',
    },
    body: {
      maxHeight: '100vh',
      maxWidth: '100vw',
      height: 'full',
      width: 'full',
    },
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'gray.200',
      borderRadius: '24px',
    },
  },
};

export const theme = extendTheme({ styles, config });
