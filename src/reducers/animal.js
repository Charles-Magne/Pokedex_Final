// ici on import les actions

import { SAVE_ANIMAL, SAVE_SEARCH } from "../action/animal";

//on appelle le initalSate
export const initialState = {
  list: [],
  searchFunction: '',
};
// APPEL_API 4- dans le reducer, on indique que lorsque que l'on a recuperer les datas de l'api on doit les placer dans le state
function animalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ANIMAL:
      return {
        ...state,
        list: action.Animal,
      };
      //On place la value de la recherche dans le state
      case SAVE_SEARCH:
      return {
        ...state,
        searchFunction: action.value,
      };
     //rien ne change en dessous
      default:
        return state;
  }
};


export default animalReducer;
