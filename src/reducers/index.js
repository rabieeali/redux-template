import { combineReducers } from "redux"
import { usersReducer } from "./usersReducer"



export const reducers = combineReducers({
    usersSlice: usersReducer
})