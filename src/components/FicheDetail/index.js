import style from './style.scss' ;

//les dépendances
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// les actions
import { fetchOneAnimal, saveUrlAnimal } from '../../action/animal';


//****************** Le composant *******************
function FicheDetail () {

  //le useParmas permet d'extraire le slug de l'adresse web
  const { name } = useParams();
  console.log('Le Slug=>', name);
  const dispatch = useDispatch();

  useEffect(
    () => {
      // On veut recup un objet directement depuis l'API
      // Pour ça, on va dispatcher une action (émettre l'intention de charger les animaux)
      dispatch(fetchOneAnimal(name));
    },
    [],
  );

const changeValue = (event) => {
  dispatch(saveSearch(event.currentTarget.value, "searchValue"))};

  const data = useSelector((state) => state.animal.SlugFiche);
  console.log('le tableau de donnée pour la ficheDetail =>', Object.keys(data));
  

  return(
    <div>
      <h1>je suis la fiche de {name} </h1>
      <h1>C'est un test  {data}</h1>
    </div>
  );
}

export default FicheDetail;
