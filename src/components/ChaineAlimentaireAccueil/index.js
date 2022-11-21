import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ClickHeaderChaine } from '../../action/link';

function ChaineAlimentaireAccueuil () {

  const dispatch = useDispatch();

useEffect (() => {
  dispatch(ClickHeaderChaine("Chaine"));

}, []);
console.log('chaine alimentaire');

  return (
    <div>
      <h1>Je suis la page de la chaine alimentaire</h1>
    </div>
  )
}

export default ChaineAlimentaireAccueuil;
