import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
})

const {reducer, actions} = cartSlice;
export default reducer;