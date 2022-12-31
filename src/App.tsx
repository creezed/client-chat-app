import LoginPage from "./pages/auth/login/LoginPage";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import "utils/styles/flex.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div children={<Outlet />} />
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
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
