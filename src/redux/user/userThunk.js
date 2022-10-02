import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const loginThunk = createAsyncThunk("user/login", async (params, thunkApi) => {
    try {
        const data = await userApi.login(params.username, params.password);
        return {
            token: data.token,
            username: params.username
        };
    } catch (error) {
        throw new Error(error.message);
    }
})

export const getAllUser = createAsyncThunk("user/getAll", async (params, thunkApi) => {
    try {
        const users = await userApi.getAll();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
})