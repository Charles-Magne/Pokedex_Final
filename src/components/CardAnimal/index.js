import "./style.scss";

import FicheDetail from "../FicheDetail";

//les assets
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";
import boss from "../../assets/pictures/boss.jpg";

// les dependances
import PropTypesLib from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Les actions
import { fetchOneAnimal } from "../../action/animal";
import { fetchCardImg } from "../../action/animalPhoto.js";

//---------------------La fonction--------------------------------
function CardAnimal({ name, taxonomy, locations, characteristics }) {
  const dispatch = useDispatch();

  const animalName = useSelector((state) => state.animal.PictureName);
  const animalImg = useSelector((state) => state.animal.PictureCard);

  const listImg = { ...animalImg };

  const listImg1 = { ...listImg.hits }[0];
  console.log("la data qu'on veut utiliser", listImg1);

  // APPEL_API 1- On initie un dispatch qui va appeler une fonction qui est dans les actions
  useEffect(() => {
    dispatch(fetchCardImg(name));
  }, []);

    console.log("1-le animalname =>", animalName);
    const imgTrue = document.querySelector(".img1");
    const imgBoss = document.querySelector(".imgChat");

    //Si le nom de la card est egal au nom du reducer ...
    if (animalName == name) {
      console.log("2-celui ci, on le selectionne (card) =>", name);

      // ... alors On verifie que l'img de l'app n'est pas deja presente ...
      if (imgTrue.style.display != "block") {
        console.log("3-le display de", name, "est en block");

        // ... si il n'y a pas d'img de l'app, alors on regerde dans le state ...
      } else if (imgTrue.style.display = "none") {
        console.log("4-le display de", name, "est en none");

        // .. Si le state est rempli, On passe l'img app en block ...
        if (listImg1 !== undefined) {
          console.log("5- *******On passe en block", name);
          imgTrue.style.display = "block";
          imgBoss.style.display = "none";

          // ... Si le state est vide, on passe l'img de l'app en none.
        } else if (
          listImg1 == undefined /*&& imgTrue.style.display == "none"*/
        ) {
          imgBoss.style.display = "block";
          imgTrue.style.display = "none";
          console.log(" 6- ------On affiche le potit chat", name);
        }
      }
    }

  // V Provisoire
  const listPicture = useSelector((state) => state.animal.listPhoto);

  //RAPPEL => Condition ? exprSiVrai : exprSiFaux
  // Ici Une ternaire qui gere l'affichage de l'habiat si nul => on affiche inconnu
  const toggleHabitat =
    characteristics.habitat !== undefined ? characteristics.habitat : "Inconnu";

  // Ici Une ternaire qui gere l'affichage de la premiere location si nul => on affiche inconnu
  const toggleLocation = locations[0] == undefined ? "Inconnu" : locations[0];

  // Ici Une ternaire qui gere l'affichage de la deuxieme location si nul => on affiche rien
  const toggleLocation1 = locations[1] == undefined ? "" : locations[1];

  const listPhotoSommaire = { ...listPicture };

  const listPhotoSommaire1 = { ...listPhotoSommaire.hits }[0];

  const urlSlug = name;

  // ---------------------le composant--------------------------------
  return (
    <article className="card-animal">
      <Link className="contenerSelection" to={`/Animal/${name}`}>
        <div className="selection-left">
          <img
            className="img1"
            src={listPhotoSommaire1.largeImageURL}
            alt="animal picture"
          />
          <img className="imgChat" src={boss} alt="cat" />
          <div className="selection-right">
            <span className="animal-name">{name}</span>
            <div className="animal-class">
              <span className="animal-sort">{taxonomy.order}</span>
              <span className="animal-underSort">{taxonomy.family}</span>
            </div>
            <div className="selection-down__right">
              <div className="contenaire-info">
                <img
                  className="icone_world icone"
                  src={biome}
                  alt="word_icone"
                />
                <span className="info-name info-habitat"> {toggleHabitat}</span>
              </div>
              <div className="contenaire-info">
                <img
                  className="icone_world icone"
                  src={globe}
                  alt="world icone"
                />
                <span className="info-name info-locations">
                  {toggleLocation} {""} {toggleLocation1}
                </span>
              </div>
              <div className="contenaire-info">
                <img
                  className="icone_world icone"
                  src={plate}
                  alt="word icone"
                />
                <span className="info-name">{characteristics.diet}</span>
              </div>
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
