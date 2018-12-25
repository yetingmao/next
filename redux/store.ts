import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";

export function initStore(preloadedState) {
    return createStore(rootReducer, preloadedState);
}
