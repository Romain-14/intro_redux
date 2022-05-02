import { legacy_createStore } from "redux";
import counterReducer from "./counter/reducer";

const store = legacy_createStore(counterReducer);

export default store;