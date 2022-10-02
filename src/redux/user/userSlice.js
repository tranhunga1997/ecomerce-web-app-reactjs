import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunk";

const initialState = {
    username: JSON.parse(localStorage.getItem("user-info"))?.username || "",
    token: JSON.parse(localStorage.getItem("user-info"))?.token || "",
    loginAt: null,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.loginAt = new Date();
            localStorage.setItem("user-info", JSON.stringify(state));
        }
    }
})

const { reducer, actions } = userSlice;
export const { setUser } = actions
export default reducer;