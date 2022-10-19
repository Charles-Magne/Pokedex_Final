
// Des que l'on a recu les infos sur les animaux on envoie une requete pour trouver les photos

import { func } from "prop-types";

export const FETCH_ANIMAL_PHOTO = "FETCH_ANIMAL_PHOTO";

export function fetchAnimalPhoto() {
  return {
    //ON defini l'action type
    type: FETCH_ANIMAL_PHOTO,
  };
}

export const SAVE_ANIMAL_PHOTO = "SAVE_ANIMAL_PHOTO";

export function saveAnimalPhoto(value) {
  return {
    type: SAVE_ANIMAL_PHOTO,
    value: value,
  };
}

export const SAVE_ONE_PHOTO = "SAVE_ONE_PHOTO";

export function saveOnePhoto (value) {
  return {
    type: SAVE_ONE_PHOTO,
    value: value,
  };
}

export const SLUG_PHOTO = "SLUG_PHOTO";

export function slugPhoto (urlSlug) {
  return {
    type: SLUG_PHOTO,
    urlSlug: urlSlug,
  };
}
