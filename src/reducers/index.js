import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"

export const reducers = combineReducers({
    shoppingCart: cartReducer,
})