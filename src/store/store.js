import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";

// const reducer = combineReducers

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;