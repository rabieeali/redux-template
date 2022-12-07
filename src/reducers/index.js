import { combineReducers } from "redux"
import { addTaskReducer } from "./addTaskReducer"



export const reducers = combineReducers({
    tasks: addTaskReducer,

})