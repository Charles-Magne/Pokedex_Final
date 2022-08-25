import { combineReducers } from "redux";

import animalReducer from "./animal";

// Le combineReducers sert a diviser le state et le reducer et de faire correspondre l'un a l'autre
const rootReducer = combineReducers({
  animal: animalReducer,
});

export default rootReducer;
