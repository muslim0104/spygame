import { combineReducers, legacy_createStore } from "redux";
import {mainReducer} from "./main-reducer";
import {userReducer} from "./user-reducer";

export type RootStateType=ReturnType<typeof rootReducer>

let rootReducer=combineReducers({
    wordsStore:mainReducer,
    userStore:userReducer
})

export const store=legacy_createStore(rootReducer)