// Ici on creer une action type => c'est elle qui fait le lien entre le composant, le reducer et le Middleware

//fetch sert a recuperer une data depuis une api
export const FETCH_ALL_ANIMAL = 'FETCH_ALL_ANIMAL';

export function fetchAllAnimal() {
  return {
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

export const FETCH_NORISS = 'FETCH_NORISS';

export function fetchNoriss () {
  return {
    type: FETCH_NORISS,
  };
}

//save permet d'enregistrer une data dans le state
export const SAVE_NORISS = 'SAVE_NORISS';

export function saveNoriss (Noriss) {
  return {
    type: SAVE_NORISS,
    fact: Noriss,
  };
}
