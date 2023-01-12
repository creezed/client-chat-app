import {
  ChakraProvider,
  createStandaloneToast,
  Progress,
} from '@chakra-ui/react';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from '~/router';
import { persistor, store } from '~/store/store';
import { theme } from '~/styles/theme';

const { ToastContainer } = createStandaloneToast();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Suspense
            fallback={<Progress isIndeterminate colorScheme="whatsapp" />}
          >
            <AppRouter />
            <ToastContainer />
          </Suspense>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
