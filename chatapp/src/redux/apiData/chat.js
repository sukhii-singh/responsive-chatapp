import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endPoints from "../apiEndPoints";
import Cookies from "js-cookie";


export const searchUser = createAsyncThunk("search-user", async (args, { rejectWithValue }) => {

    try {
        const cook = await Cookies.get("user")
        const token = JSON.parse(cook)
        const response = await axios.post(`${endPoints.SEARCH_USER}`, args, {
            headers: {
                'Authorization': `Bearer`,
                "token": `${token?.token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error)
    }
})