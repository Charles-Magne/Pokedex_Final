
// Des que l'on a recu les infos sur les animaux on envoie une requete pour trouver les photos

export const SAVE_ANIMAL_PHOTO = "SAVE_ANIMAL_PHOTO";

export function fetchAnimalPhoto() {
  return {
    //ON defini l'action type
    type: SAVE_ANIMAL_PHOTO,
  };
}
