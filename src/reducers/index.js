import { combineReducers } from "redux";

import animalReducer from "./animal";
import linkReducer from "./link";

// Le combineReducers sert a diviser le state et le reducer et de faire correspondre l'un a l'autre
const rootReducer = combineReducers({
  animal: animalReducer,
  link: linkReducer,
});

export default rootReducer;
