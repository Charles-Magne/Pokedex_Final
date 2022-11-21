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
import {
  moreOneIndexCat,
  moreOneIndexApp,
  rememberNametow,
  rememberName,
  countToZero,
  toZeroSaveName,
  toZeroPictureName,
} from "../../action/animal";

//---------------------La fonction--------------------------------
function CardAnimal({ name, characteristics }) {
  const dispatch = useDispatch();

  const zero = 0;

  // APPEL_API 1- On initie un dispatch qui va appeler une fonction qui est dans les actions
  useEffect(() => {
    dispatch(fetchCardImg(name));
    dispatch(countToZero(zero));
    dispatch(toZeroSaveName(''));
    dispatch(toZeroPictureName(''));
  }, []);

 // Le use selector pour cibler la bonne data

  const nameEnCours = useSelector((state) => state.animal.namesave);

  // L'index qui s'incremente pour cibler la bonne div
  const indexImg = useSelector((state) => state.animal.CountImgIndex);

  // La photo de l'animal qu'il faut appeler
  const animalImg = useSelector((state) => state.animal.PictureCard);

  //On destructure le state pour les imgs
  const listImg = { ...animalImg };

  const listImg1 = { ...listImg.hits }[0];

  // Le nom de l'animal pour savoir quand appeler l'img
  const animalName = useSelector((state) => state.animal.PictureName);

  // on va chercher les datas dans le state
  const dataAnnimal = useSelector((state) => state.animal.list);

  const dataAnimal = {...dataAnnimal};
  
  const srcanimaux = dataAnimal[indexImg];


  // On incrermente l'index d'un pour dispatcher
  const indexIncrementation = indexImg + 1;

  //On selectionne toutes les imgs
  const imgTrue = document.querySelectorAll(".img1");

  const imgTarget = imgTrue[indexImg];
  //-------------------********************************--------------------
  //Si on est deja en train de gerer ce name, on block le processe ici pour ne pas creer de boucle infinie
  if (nameEnCours == name) {
    console.log('on ne fait rien', nameEnCours);
  }
  //Si le nom de la card est egal au nom du reducer ...
  else if (animalName == name) {
    console.log("-----------------");
    console.log('les datas avec index', srcanimaux.taxonomy.class);
    console.log("-1-check de la photo card", imgTarget);
    console.log("0-la data qu'on veut utiliser", listImg1);
    console.log("1-le animalname =>", animalName);
    console.log("2-celui ci, on le selectionne (card) =>", name);
    console.log("3- indexImg=>", indexImg);
    console.log("4- imgTrue.value=>", imgTrue.length);

    // .. Alors on verifie que le state soit rempli, On passe l'img app en block ...
    if (listImg1 == undefined) {
      console.log("5- *******On affiche le potit chat", name);
      imgTarget.setAttribute("src", boss);
      console.log('laphoto du potit chat', imgTarget);

      // ... Si le state est vide, on passe l'img de l'app en none.
      if (indexImg < imgTrue.length - 1) {
        dispatch(moreOneIndexCat(indexIncrementation));
        dispatch(rememberName(name));
        console.log(" 7- l index a la fin", indexIncrementation);
      }

    } else if (listImg1 !== undefined) {
      imgTarget.setAttribute("src", listImg1.largeImageURL);
      console.log(" 6- ------On passe l'img du state en block", name);
      console.log(" 6.5- ------On passe l'img du state en block");

      if (indexImg < imgTrue.length - 1) {
        dispatch(moreOneIndexApp(indexIncrementation));
        dispatch(rememberNametow(name));
        console.log(" 7- l index a la fin", indexIncrementation);
      }
    } else if (indexImg = imgTrue.length - 1) {
      console.log("on ne fait rien");
    }
  }
//----------------------------**********************************---------------

  //RAPPEL => Condition ? exprSiVrai : exprSiFaux
  // Ici Une ternaire qui gere l'affichage de l'habiat si nul => on affiche inconnu
  const toggleHabitat =
    characteristics.habitat !== undefined ? characteristics.habitat : "Inconnu";

  // Ici Une ternaire qui gere l'affichage de la premiere location si nul => on affiche inconnu
  const toggleLocation = srcanimaux.locations[0] == undefined ? "Inconnu" : srcanimaux.locations[0];

  // Ici Une ternaire qui gere l'affichage de la deuxieme location si nul => on affiche rien
  const toggleLocation1 = srcanimaux.locations[1] == undefined ? "" : srcanimaux.locations[1];

  const urlSlug = name;
  // ---------------------le composant--------------------------------
  return (
    <article className="card-animal">
      <Link className="contenerSelection" to={`/Animal/${name}`}>
        <div className="selection-left">
          <img className="img1" src="" alt="animal picture" />
          <div className="selection-right">
            <span className="animal-name">{name}</span>
            <div className="animal-class">
              <span className="animal-sort">{srcanimaux.taxonomy.order}</span>
              <span className="animal-underSort">{srcanimaux.taxonomy.family}</span>
            </div>
            <div className="selection-down__right">
              <div className="contenaire-info">
                <img
                  className="icone_world icone"
                  src={biome}
                  alt="word_icone"
                />
                <span className="info-name info-habitat" > {toggleHabitat}</span>
              </div>
              <div className="contenaire-info">
                <img
                  className="icone_world icone"
                  src={globe}
                  alt="world icone"
                />
                <span className="info-name info-locations" >
                  {toggleLocation} {""} {toggleLocation1}
                </span>
              </div>
              <div className="contenaire-info">
                <img
                  className="icone_world icone"
                  src={plate}
                  alt="word icone"
                />
                <span className="info-name" >{srcanimaux.characteristics.diet}</span>
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
};

export default CardAnimal;
