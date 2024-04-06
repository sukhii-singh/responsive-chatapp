

import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './slices/infoSlice'
import userReducer from './slices/userAuthSlice'
import searchFrndsReducer from './slices/searchFriendSlice'
import frndAndReqReducer from './slices/friendsAndReqstSlice'

const store = configureStore({
    reducer: {
        info: infoReducer,
        user: userReducer,
        srchFrnds: searchFrndsReducer,
        frndAndReq: frndAndReqReducer,
    },
})

export default store