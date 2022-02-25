import { combineReducers } from "@reduxjs/toolkit";
import hobbyReducer from "./hobby";
import useReducer from "./user";


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: useReducer,
})

export default rootReducer;