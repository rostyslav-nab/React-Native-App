import { createStore, combineReducers } from "redux";
import imageReducer from "./reducers/image";
const rootReducer = combineReducers({
  image: imageReducer,
});

export default createStore(rootReducer);
