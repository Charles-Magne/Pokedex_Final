
// Des que l'on a recu les infos sur les animaux on envoie une requete pour trouver les photos

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
