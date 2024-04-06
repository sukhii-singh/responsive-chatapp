import { createSlice } from "@reduxjs/toolkit";


const infoSlice = createSlice({
    name: "toggle info",
    initialState: {
        infoPanel: false,
    },
    reducers: {
        setToggleInfo: (state) => {
            state.infoPanel = !state.infoPanel;
        }
    }
})
export const infoActions = infoSlice.actions
const infoReducer = infoSlice.reducer
export default infoReducer