import { createStore, combineReducers } from "redux";
import counterReducer from "./Counter/counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
