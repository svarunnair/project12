import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducerData } from "./data/reducer";




const root=combineReducers({
    data:reducerData,
   
})

export const store=legacy_createStore(root,applyMiddleware(thunk))