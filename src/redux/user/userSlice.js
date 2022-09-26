import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user-info"));

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: {

    }
})

const { reducer, actions } = userSlice;
export default reducer;