
//Lorsque l'on clique sur encyclopedie on place active dans 
export const CLICK_HEADER_ENCYCLO = "CLICK_HEADER_ENCYCLO";

export function ClickHeaderEncyclo(Encyclo) {
  return {
    type: CLICK_HEADER_ENCYCLO,
    Encyclo,
  };
}

//Lorsque l'on clique sur Classification on place classi dans le stat
export const CLICK_HEADER_CLASSI = "CLICK_HEADER_CLASSI";

export function ClickHeaderClassi(Classi) {
  return {
    type: CLICK_HEADER_CLASSI,
    Classi,
  };
}

//Lorsque l'on clique sur Chaine alimentaire on place Chaine dans le stat
export const CLICK_HEADER_CHAINE = "CLICK_HEADER_CHAINE";

export function ClickHeaderChaine(Chaine) {
  return {
    type: CLICK_HEADER_CHAINE,
    Chaine,
  };
}
