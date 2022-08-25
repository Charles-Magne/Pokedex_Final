// ici on import les actions

import { SAVE_ANIMAL, SAVE_NORISS } from "../action/animal";

//on appelle le initalSate
export const initialState = {
  list: [],
  fact: '',
};

function animalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ANIMAL:
      return {
        ...state,
        list: action.Animal,
      };
      case SAVE_NORISS:
      return {
        ...state,
        fact: action.fact,
      };
      default:
        return state;
  }
};


export default animalReducer;
