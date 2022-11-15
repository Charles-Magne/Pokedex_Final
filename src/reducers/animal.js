// ici on import les actions

import { SAVE_ANIMAL, SAVE_SEARCH, SAVE_URL_ANIMAL } from "../action/animal";
import {
  SAVE_ANIMAL_PHOTO,
  SAVE_ONE_PHOTO,
  SAVE_CARD_IMG,
} from "../action/animalPhoto";

//on appelle le initalSate
export const initialState = {
  list: [], // les data que l'on recoit de l'api encyclopedie
  searchFunction: "", // le champs controlé de recherche
  slugUrl: null, // le slug de l'url
  SlugFiche: null, // les infos que l'on retrouve sur la fiche d'un animal
  listPhoto: null, // la list des photos pour l'acceuil
  PictureUnique: null, // la photo presente sur la fiche
  PictureCard: [], // Stock les imgs des cards
  PictureName: "", // le nom de la data 
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
      return {
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

    // Ici on save la photo de chaque card
    case SAVE_CARD_IMG:
      return {
        ...state,
          PictureCard: action.value,
          PictureName: action.recherche,
      };

    //rien ne change en dessous
    default:
      return state;
  }
}

export default animalReducer;
