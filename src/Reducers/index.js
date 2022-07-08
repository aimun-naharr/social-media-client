import {combineReducers, conbinedReducers} from "redux"
import authReducer from "./authReducer"
import postReducer from "./PostReducer"

export const reducers= combineReducers({authReducer, postReducer})