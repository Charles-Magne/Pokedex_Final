import { useDispatch } from "react-redux";

import { ClickHeaderChaine } from '../../action/link';

function ChaineAlimentaireAccueuil () {

  const dispatch = useDispatch();

  dispatch(ClickHeaderChaine("Chaine"));

  return (
    <div>
      <h1>Je suis la page de la chaine alimentaire</h1>
    </div>
  )
}

export default ChaineAlimentaireAccueuil;
