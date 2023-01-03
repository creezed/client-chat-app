import {AuthResponse, ILoginData, IRegistrationData} from "./auth.types";
import {axiosPublic} from "@api/axios";
import {AxiosResponse} from "axios";

export const AuthService = {
    async registration(data: IRegistrationData): Promise<AxiosResponse<AuthResponse>> {
        return axiosPublic.post<AuthResponse>('/auth/register', data)
    },

    async login(data: ILoginData): Promise<AxiosResponse<AuthResponse>> {
        return axiosPublic.post<AuthResponse>('/auth/login', data)
    }
}
