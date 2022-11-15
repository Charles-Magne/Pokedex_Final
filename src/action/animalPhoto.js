

// Des que l'on a recu les infos sur les animaux on envoie une requete pour trouver les photos



// On place une seule photo dans le state
export const SAVE_ONE_PHOTO = "SAVE_ONE_PHOTO";

export function saveOnePhoto (value) {
  return {
    type: SAVE_ONE_PHOTO,
    value: value,
  };
}


//permet de fetch une img pour une card
export const FETCH_CARD_IMG = "FETCH_CARD_IMG";

export function fetchCardImg (value) {
  return {
    type: FETCH_CARD_IMG,
    value,
  };
}

//permet de save une img pour une card dans le state
export const SAVE_CARD_IMG = "SAVE_CARD_IMG";

export function saveCardImg (value, recherche) {
  return {
    type: SAVE_CARD_IMG,
    value,
    recherche,
  };
}




