import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@services/auth";
import { AuthResponse, ILoginData, IRegistrationData } from "@services/auth/auth.types";
import { AxiosResponse } from "axios";

export const registration = createAsyncThunk<AxiosResponse<AuthResponse>, IRegistrationData>(
    "auth/registration",
    async (data, thunkAPI) => {
        try {
            return await AuthService.registration(data);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const login = createAsyncThunk<AxiosResponse<AuthResponse>, ILoginData>(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            return await AuthService.login(data);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);
