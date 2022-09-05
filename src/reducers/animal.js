// ici on import les actions

import { SAVE_ANIMAL, SAVE_SEARCH, SAVE_URL_ANIMAL } from "../action/animal";

//on appelle le initalSate
export const initialState = {
  list: [],
  searchFunction: "",
  slugUrl: "", // ne sert pas pour le moment
  SlugFiche: [],
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

      //Pour stocker une data dans le stat et l'utiliser sur la fiche detail
      case SAVE_URL_ANIMAL:
      return{
        ...state,
        SlugFiche: action.value,
      };

    //rien ne change en dessous
    default:
      return state;
  }
}

export default animalReducer;
