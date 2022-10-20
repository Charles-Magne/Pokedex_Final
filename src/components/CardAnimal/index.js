import "./style.scss";

import FicheDetail from "../FicheDetail";

//les assets
import face from "../../assets/pictures/face-a-face.jpg";
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
import { fetchAllImgCard } from "../../action/animalPhoto";

//---------------------La fonction--------------------------------
function CardAnimal({ name, taxonomy, locations, characteristics }) {
  const dispatch = useDispatch;

  useEffect(() => {
    // Ici on doit verifier si les datas sont remplis -- si elle sont vides ont les remplir avec inconnu
    //const habitat = document.querySelector('.info-habitat');
    console.log("coucou");
    
    /* if (habitat !== undefined) {
      habitat.textContent = "Inconnu";
    } else {
      console.log('on affiche');
    }

    const locations = document.querySelector('.info-locations');
    if (locations !== undefined) {
      locations.textContent = "Inconnu";
    } else {
      console.log('on affiche');
    }*/
  }, []);

  /*useEffect(() => {
    // On veut recup un objet directement depuis l'API
    // Pour ça, on va dispatcher une action (émettre l'intention de charger les animaux)
    dispatch(fetchOneAnimal(name));
  }, []);*/

  const listPicture = useSelector((state) => state.animal.listPhoto);

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
              <span className="info-name info-habitat">
                {" "}
                {characteristics.habitat}
              </span>
            </div>
            <div className="contenaire-info">
              <img
                className="icone_world icone"
                src={globe}
                alt="world icone"
              />
              <span className="info-name info-locations">
                {locations[(0, 1)]}
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
