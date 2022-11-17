// ici on import les actions

import {
  SAVE_ANIMAL,
  SAVE_SEARCH,
  SAVE_URL_ANIMAL,
  MORE_ONE_INDEX_CAT,
  MORE_ONE_INDEX_APP,
  REMEMBER_NAME_TOW,
  REMEMBER_NAME
} from "../action/animal";
import { SAVE_ONE_PHOTO, SAVE_CARD_IMG } from "../action/animalPhoto";

//on appelle le initalSate
export const initialState = {
  list: [], // les data que l'on recoit de l'api encyclopedie
  searchFunction: "", // le champs controlé de recherche
  slugUrl: null, // le slug de l'url
  SlugFiche: null, // les infos que l'on retrouve sur la fiche d'un animal
  PictureUnique: null, // la photo presente sur la fiche
  PictureCard: [], // Stock les imgs des cards
  PictureName: "", // le nom de la data pour checker si c'est la bonne img
  CountImgIndex: 0,
  namesave: null,
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

    // Ici On increment l'index des photos en cas de photos recus via l'app
    case MORE_ONE_INDEX_APP:
      return {
        ...state,
        CountImgIndex: action.value,
      };

    // Ici On increment l'index des photos lorsque l'on rajoute une photo de chat a la place d'une donnée manquante
    case MORE_ONE_INDEX_CAT:
      return {
        ...state,
        CountImgIndex: action.value,
      };

    // Ici On save le name pour pouvoir le recuperer dans les cards et le comparer aux names qui arrivent
    case REMEMBER_NAME_TOW:
      return {
        ...state,
        namesave: action.value,
      };

          // Ici On save le name pour pouvoir le recuperer dans les cards et le comparer aux names qui arrivent
    case REMEMBER_NAME:
      return {
        ...state,
        namesave: action.value,
      };

    //rien ne change en dessous
    default:
      return state;
  }
}

export default animalReducer;
