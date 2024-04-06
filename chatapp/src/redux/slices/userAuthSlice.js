import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignup } from "../apiData/user";

const initialState = {
    isLoading: false,
    isError: false,
    userData: null
}
const userSlice = createSlice({
    name: "login signup",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // -------------------user signup-----------------
        builder.addCase(userSignup.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.userData = action.payload;
        })
        builder.addCase(userSignup.pending, (state, action) => {
            state.userData = null;
            state.isLoading = true;
            state.isError = false;

        })
        builder.addCase(userSignup.rejected, (state, action) => {
            state.userData = null;
            state.isLoading = false;
            state.isError = action.payload;

        })
        // -------------------user login-----------------
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.userData = action.payload;
        })
        builder.addCase(userLogin.pending, (state, action) => {
            state.userData = null;
            state.isLoading = true;
            state.isError = false;

        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.userData = null;
            state.isLoading = false;
            state.isError = action.payload;

        })
    }
})

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer
export default userReducer