import { AppRouter } from "./router";
import { ChakraProvider, Spinner, createStandaloneToast } from "@chakra-ui/react";
import { persistor, store } from "@store/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@utils/styles/flex.scss";
import "@utils/styles/global.scss";

const { ToastContainer } = createStandaloneToast();

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ChakraProvider>
                    <Suspense fallback={<Spinner />}>
                        <AppRouter />
                        <ToastContainer />
                    </Suspense>
                </ChakraProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
