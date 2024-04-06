import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"
import endPoints from "../apiEndPoints";



export const userSignup = createAsyncThunk("signup", async (args, { rejectWithValue }) => {
    try {
        console.log("asas", args)
        const response = await axios.post(`${endPoints.SIGNUP}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const userLogin = createAsyncThunk("login", async (args, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${endPoints.LOGIN}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})