import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    frndsAndReqstPanel: "friends"
}
const frndandreqSlice = createSlice({
    name: "friends and chat panel",
    initialState,
    reducers: {
        toggleFrndsAndReqPanel: (state, action) => {
            state.frndsAndReqstPanel = action.payload;
        }
    }
})


export const frndAndReqActions = frndandreqSlice.actions
const frndAndReqReducer = frndandreqSlice.reducer
export default frndAndReqReducer