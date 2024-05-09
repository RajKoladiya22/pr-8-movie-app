import { combineReducers } from "redux";
import { crudReducer } from "./crudreducer";

export const RootReducer = combineReducers({
    crud : crudReducer
})