import { createStore } from "redux";
import rootReducers from "./action/reducer";

const store = createStore (rootReducers);
export default store;
