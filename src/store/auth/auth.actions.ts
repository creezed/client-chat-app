import { createStandaloneToast } from "@chakra-ui/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, AuthService, ILoginData, IRegistrationData } from "@services/auth";
import { errorCatch } from "@utils/helpers/error-catch";
import { AxiosError } from "axios";

const { toast } = createStandaloneToast();

export const registration = createAsyncThunk<AuthResponse, IRegistrationData>(
    "auth/registration",
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.registration(data);
            toast({
                title: "Success",
                description: "Success registration",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top-right"
            });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (err) {
            const error = err as AxiosError;
            const errorMessage = errorCatch(error);
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right"
            });
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const login = createAsyncThunk<AuthResponse, ILoginData>(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.login(data);
            toast({
                title: "Success",
                description: "Success authorization",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top-right"
            });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (err) {
            const error = err as AxiosError;
            const errorMessage = errorCatch(error);
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right"
            });
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
