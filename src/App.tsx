import LoginPage from "./pages/auth/login/LoginPage";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import ConversationPanelPage from "./pages/conversation-panel/ConversationPanelPage";
import ConversationPage from "./pages/conversation/ConversationPage";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { persistor, store } from "@store/store";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "@utils/styles/flex.scss";
import "@utils/styles/global.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div children={<Outlet />} />,
        children: [
            {
                path: "conversation",
                element: <ConversationPage />,
                children: [
                    {
                        path: ":id",
                        element: <ConversationPanelPage />
                    }
                ]
            }
        ]
    },
    {
        path: "/registration",
        element: <RegistrationPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ChakraProvider>
                    <RouterProvider router={router} fallbackElement={<Spinner />} />
                </ChakraProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
