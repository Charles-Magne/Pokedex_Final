import style from "./style.scss";

//les dépendances
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Les composants
import Header from "../Header";

// les actions
import { fetchOneAnimal, saveUrlAnimal } from "../../action/animal";

//****************** Le composant *******************
function FicheDetail() {

  //le useParmas permet d'extraire le slug de l'adresse web // la const doit porter le meme nome que la data que l'on souhaite extraire de l'url
  const { name } = useParams();
  console.log("Le Slug=>", name);

  const dispatch = useDispatch();
  //console.log('les proptype de la fiche =>', FicheDetail.prototype[name]);

  useEffect(() => {
    // On veut recup un objet directement depuis l'API
    // Pour ça, on va dispatcher une action (émettre l'intention de charger les animaux)
    dispatch(fetchOneAnimal(name));
  }, []);

  const animalSlug = useSelector((state) => state.animal.SlugFiche);
  console.log('test DataTransfer',animalSlug);
//console.log('le tableau de donnée pour la ficheDetail =>', Object.keys(animalSlug));
//console.log("Test pour le name", Object.values(animalSlug));
//console.log('test True!!!', Object.entries(animalSlug));



  return(
    <div>
      <Header/>
      <h1>je suis la fiche de {animalSlug.name} </h1>
      <h1>C'est un test  </h1>
    </div>
  );
}


export default FicheDetail;
