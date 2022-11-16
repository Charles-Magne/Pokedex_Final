// Ici on creer une action type => c'est elle qui fait le lien entre le composant, le reducer et le Middleware

//fetch sert a recuperer une data depuis une api
export const FETCH_ALL_ANIMAL = "FETCH_ALL_ANIMAL";

// APPEL_API 2- l'action que l'on creer et que l'on export va servir a faire le lien entre le composant et les middlewares

export function fetchAllAnimal() {
  return {
    //ON defini l'action type
    type: FETCH_ALL_ANIMAL,
  };
}

//save permet d'enregistrer une data dans le state
export const SAVE_ANIMAL = "SAVE_ANIMAL";

export function saveAnimal(Animal) {
  return {
    type: SAVE_ANIMAL,
    Animal: Animal,
  };
}

//save pour la fonction search
export const SAVE_SEARCH = "SAVE_SEARCH";

export function saveSearch(value, field) {
  return {
    type: SAVE_SEARCH,
    value: value,
    field: field,
  };
}

//envoie le state en requete lors d'un submit
export const VALIDE_VALUE = "VALIDE_VALUE";

export function sendSearch() {
  return {
    type: VALIDE_VALUE,
  };
}

export const FETCH_ONE_ANIMAL = "FETCH_ONE_ANIMAL";

//Utiliser lors du clic sur une card
export function fetchOneAnimal(nameUrl) {
  return {
    type: FETCH_ONE_ANIMAL,
    value: nameUrl,
  };
}

// utiliser pour recevoir les datas d'un seul animal qu'on envoie au stat
export const SAVE_URL_ANIMAL = "SAVE_URL_ANIMAL";

export function saveUrlAnimal(name) {
  return {
    type: SAVE_URL_ANIMAL,
    value: name,
  };
}

// utiliser pour recevoir les datas d'un seul animal qu'on envoie au stat
export const MORE_ONE_INDEX = "MORE_ONE_INDEX";

export function moreOneIndex(indexIncrementation) {
  return {
    type: MORE_ONE_INDEX,
    value: indexIncrementation,
  };
}







