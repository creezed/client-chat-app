import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "@store/auth/auth.actions";
import { IUser } from "@utils/types";

interface IAuthInitialState {
    token: string | null;
    user: IUser | null;
    status: "pending" | "fulfilled" | "rejected" | null;
}

const initialState: IAuthInitialState = {
    token: null,
    user: null,
    status: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registration.pending, state => {
            state.status = "pending";
        });
        builder.addCase(registration.fulfilled, (state, { payload }) => {
            state.status = "fulfilled";
            state.token = payload.data.token;
            state.user = payload.data.user;
        });
        builder.addCase(registration.rejected, state => {
            state.status = "rejected";
            state.token = null;
            state.user = null;
        });
        builder.addCase(login.pending, state => {
            state.status = "pending";
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.status = "fulfilled";
            state.token = payload.data.token;
            state.user = payload.data.user;
        });
        builder.addCase(login.rejected, state => {
            state.status = "rejected";
            state.token = null;
            state.user = null;
        });
    }
});
