import { createSlice } from "@reduxjs/toolkit";
import { searchUser } from "../apiData/chat";

const initialState = {
    searchData: null,
    isLoading: false,
    isError: null,
    searchFriendsTab: false
}
const srchFrndSlice = createSlice({
    name: "search friends",
    initialState,
    reducers: {
        setSearchFriendsTab: (state, action) => {
            state.searchFriendsTab = action.payload
        },
        setSearchDataNull: (state, action) => {
            state.searchData = null
        }
    },
    extraReducers: (bulider) => {
        bulider.addCase(searchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            if (action.payload.status === true) {
                state.searchData = action.payload.data;
            }

        })
        bulider.addCase(searchUser.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;

        })
        bulider.addCase(searchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })
    }
})

export const searchFriendsActions = srchFrndSlice.actions
const searchFrndsReducer = srchFrndSlice.reducer
export default searchFrndsReducer
