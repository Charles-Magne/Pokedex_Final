import "./style.scss";

import FicheDetail from "../FicheDetail";

//les assets
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";

// les dependances
import PropTypesLib from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Les actions
import { fetchOneAnimal } from "../../action/animal";
import { fetchAllImgCard } from "../../action/animalPhoto.js";

//---------------------La fonction--------------------------------
function CardAnimal({ name, taxonomy, locations, characteristics }) {

  const dispatch = useDispatch;

  dispatch(fetchAllImgCard());
  console.log('j envoie l\'action');

 //const nameAnimalForPhoto = useSelector((state) => state.animal.list);
 

  const listPicture = useSelector((state) => state.animal.listPhoto);


  //RAPPEL => Condition ? exprSiVrai : exprSiFaux 
  // Ici Une ternaire qui gere l'affichage de l'habiat si nul => on affiche inconnu
  const toggleHabitat = characteristics.habitat !== undefined ? characteristics.habitat : "Inconnu";
 
  // Ici Une ternaire qui gere l'affichage de la premiere location si nul => on affiche inconnu
  const toggleLocation = locations[0]  == undefined ? "Inconnu" : locations[0] ;

  // Ici Une ternaire qui gere l'affichage de la deuxieme location si nul => on affiche rien
  const toggleLocation1 = locations[1]  == undefined ? "" : locations[1] ;
  

  const listPhotoSommaire = { ...listPicture };

  const listPhotoSommaire1 = { ...listPhotoSommaire.hits }[0];

  const urlSlug = name;

  // ---------------------le composant--------------------------------
  return (
    <article className="card-animal">
      <Link to={`/Animal/${name}`}>
        <div className="selection-up">
          <span className="animal-name">{name}</span>
          <span className="animal-sort">{taxonomy.order}</span>
          <span className="animal-underSort">{taxonomy.family}</span>
        </div>
        <div className="selection-down">
          <img
            className="img1"
            src={listPhotoSommaire1.previewURL}
            alt="animal picture"
          />
          <div className="selection-down__right">
            <div className="contenaire-info">
              <img className="icone_world icone" src={biome} alt="word_icone" />
              <span className="info-name info-habitat"  > {toggleHabitat}
                
                
              </span>
            </div>
            <div className="contenaire-info">
              <img
                className="icone_world icone"
                src={globe}
                alt="world icone"
              />
              <span className="info-name info-locations">
                 {toggleLocation} {''} {toggleLocation1}
              </span>
            </div>
            <div className="contenaire-info">
              <img className="icone_world icone" src={plate} alt="word icone" />
              <span className="info-name">{characteristics.diet}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

CardAnimal.prototype = {
  name: PropTypesLib.string.isRequired,
  taxonomy: PropTypesLib.object.isRequired,
  locations: PropTypesLib.object.isRequired,
  characteristics: PropTypesLib.object.isRequired,
};

export default CardAnimal;
