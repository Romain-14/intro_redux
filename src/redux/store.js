import { legacy_createStore, combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    counterReducer,
    userReducer,
})

const store = legacy_createStore(rootReducer);

export default store;