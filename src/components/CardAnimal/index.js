import "./style.scss";

import FicheDetail from "../FicheDetail";

//les assets
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";
import boss from "../../assets/pictures/boss.jpg";
import bird from "../../assets/pictures/face-a-face.jpg";

// les dependances
import PropTypesLib from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Les actions

import { fetchCardImg } from "../../action/animalPhoto.js";
import { moreOneIndex } from "../../action/animal";

//---------------------La fonction--------------------------------
function CardAnimal({ name, taxonomy, locations, characteristics }) {
  const dispatch = useDispatch();

  // APPEL_API 1- On initie un dispatch qui va appeler une fonction qui est dans les actions
  useEffect(() => {
    dispatch(fetchCardImg(name));
  }, []);

  // Le nom de l'animal pour savoir quand appeler l'img
  const animalName = useSelector((state) => state.animal.PictureName);

  // La photo de l'animal qu'il faut appeler
  const animalImg = useSelector((state) => state.animal.PictureCard);
  //On destructure le state pour les imgs
  const listImg = { ...animalImg };

  const listImg1 = { ...listImg.hits }[0];

  // L'index qui s'incremente pour cibler la bonne div
  const indexImg = useSelector((state) => state.animal.CountImgIndex);
  // On incrermente l'index d'un pour dispatcher
  const indexIncrementation = indexImg + 1;

  // V si la const de dessus ne marche pas, on utilise celle la.
  //const listImgTrue = { ...listImg1 };

  //On selectionne les imgs
  const imgTrue = document.querySelectorAll(".img1");

  //Si le nom de la card est egal au nom du reducer ...
  if (animalName == name) {
    console.log("-----------------");
    console.log("-1-check de la photo card", imgTrue[indexImg]);
    console.log("0-la data qu'on veut utiliser", listImg1);
    console.log("1-le animalname =>", animalName);
    console.log("2-celui ci, on le selectionne (card) =>", name);
    console.log("indexImg=>", indexImg);
    console.log("imgTrue.value=>", imgTrue.length);

    // .. Alors on verifie que le state soit rempli, On passe l'img app en block ...
    if (listImg1 == undefined) {
      console.log(" 6- ------On passe en none", name);
      imgTrue.src = { boss };
      // ... Si le state est vide, on passe l'img de l'app en none.
      if (indexImg < imgTrue.length) {
        dispatch(moreOneIndex(indexIncrementation));
        console.log("l index a la fin", indexIncrementation);
      }
    } else {
      imgTrue.src = { bird };
      console.log("5- *******On affiche le potit chat", name);

      if (indexImg < imgTrue.length) {
        dispatch(moreOneIndex(indexIncrementation));
        console.log("l index a la fin", indexIncrementation);
      }
    }
  }

  // V La ternaire que je ne vais pas utiliser
  //Si l'image url est undefined on place le chat en block sinon on le passe en none
  //photoPicture.largeImageURL == undefined ? imgCat.style.display = "block" : imgCat.style.display = "none";
  //Si l'image url est undefined on place l'animal en none sinon on le passe en block
  //photoPicture.largeImageURL == undefined ? img.style.display = "none" : img.style.display = "flex";

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
          <img className="img1 " alt="animal picture" />
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
