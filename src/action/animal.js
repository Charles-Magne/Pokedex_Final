// Ici on creer une action type => c'est elle qui fait le lien entre le composant, le reducer et le Middleware


//fetch sert a recuperer une data depuis une api
export const FETCH_ALL_ANIMAL = 'FETCH_ALL_ANIMAL';

// APPEL_API 2- l'action que l'on creer et que l'on export va servir a faire le lien entre le composant et les middlewares
export function fetchAllAnimal() {
  return {
    //ON defini l'action type
    type: FETCH_ALL_ANIMAL,
  };
}

//save permet d'enregistrer une data dans le state
export const SAVE_ANIMAL = 'SAVE_ANIMAL';

export function saveAnimal(Animal) {
  return {
    type: SAVE_ANIMAL,
    Animal: Animal,
  };
}

//save pour la fonction search
export const SAVE_SEARCH = 'SAVE_SEARCH';

export function saveSearch(value, field) {
  return {
    type: SAVE_SEARCH,
    value: value,
    field: field,
  };
}
