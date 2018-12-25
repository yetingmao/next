import { combineReducers } from "redux";
import { productReducer } from "./produce";
import { matchReducer } from "./match";

export const rootReducer = combineReducers({
    productReducer,
    matchReducer,
});
