import { combineReducers } from '@reduxjs/toolkit'

import userReducer from '../features/userSlice'
import noteReducer from '../features/noteSlice'

const rootReducer = combineReducers({
    user: userReducer,
    note: noteReducer
})

export default rootReducer