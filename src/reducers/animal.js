// ici on import les actions

import { SAVE_ANIMAL, SAVE_SEARCH, SAVE_URL_ANIMAL } from "../action/animal";
import { SAVE_ANIMAL_PHOTO, SAVE_ONE_PHOTO, SLUG_PHOTO } from "../action/animalPhoto";

//on appelle le initalSate
export const initialState = {
  list: [], // les data que l'on recoit de l'api encyclopedie
  searchFunction: "", // le champs controlé de recherche
  slugUrl: null, // le slug de l'url
  SlugFiche: null, // les infos que l'on retrouve sur la fiche d'un animal
  listPhoto: null, // la list des photos pour l'acceuil
  PictureUnique: null,

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

      // Ici on gere les photos de l'acceuil 
      case SAVE_ANIMAL_PHOTO:
        return {
          ...state,
          listPhoto: action.value,
        };

        // Ici on gere la photo de la fiche 
      case SAVE_ONE_PHOTO:
        return {
          ...state,
          PictureUnique: action.value,
        };

        // On veut mettre le slug dans le state
        case SLUG_PHOTO:
          return {
            ...state,
            slugUrl: action.value,
          };

    //rien ne change en dessous
    default:
      return state;
  }
}

export default animalReducer;
