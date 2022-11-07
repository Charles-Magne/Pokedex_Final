//les dépendances
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Les assets
import "./style.scss";
import face from "../../assets/pictures/face-a-face.jpg";
import loading from "../../assets/pictures/loading_green.png";
import theBoss from "../../assets/pictures/boss.jpg";

//Les composants
import Header from "../Header";

// les actions
import { fetchOneAnimal, saveUrlAnimal } from "../../action/animal";


//****************** Le composant *******************
function FicheDetail() {

  //le useParmas permet d'extraire le slug de l'adresse web // la const doit porter le meme nome que la data que l'on souhaite extraire de l'url
  const { name } = useParams();

  //On initie le dispatch
  const dispatch = useDispatch();
  //console.log('les proptype de la fiche =>', FicheDetail.prototype[name]);

  // Ici Une ternaire qui gere l'affichage de l'habiat si nul => on affiche inconnu
  //const toggleHabitat = characteristics.habitat !== undefined ? characteristics.habitat : "Inconnu";


  // ToDo Il faut cacher toutes les informations et n'afficher que celle remplis
  //Donc a l'initialisation du dom => tous les titres sont en display none 
  //lorsque l'on recoit les datas on passe en display flex/block ce qui est contenu dans la requete
  // Comment identifier les datas que l'on recoit par rapport a toutes les datas de la page
  // A la reception des datas Si la data est differante de null alors on affiche la div info generique 


  //!|| Attention, il vaut mieux faire un appel API lors du clic sur la card comme ca pas de contradition entre l'url et la vitesse de chargement du dom
  //! V  Plutot utiliser les props et les stocker dans le stat
  useEffect(() => {
    // On veut recup un objet directement depuis l'API
    // Pour ça, on va dispatcher une action (émettre l'intention de charger les animaux)
    dispatch(fetchOneAnimal(name));
  }, []);

  /*// On vient choper la photo de l'animal dans le reducer (stat)
  const pictureStat = useSelector((state) => state.animal.PictureUnique);
  console.log('la photo =>', pictureStat);

  const pictureData = { ...pictureStat };
  console.log('la photo plus precis =>', pictureData);

  const Picture = { ...pictureData.hits}[0];
  console.log('la photo unique =>', Picture );

  const pictureLarge = { Picture.largeImageURL };
*/
 // -------------------



  const listPicture = useSelector((state) => state.animal.PictureUnique);

  const listPhotoSommaire =  { ...listPicture};

  const listPhotoSommaire1 = { ...listPhotoSommaire.hits }[0];

  const photoPicture = { ...listPhotoSommaire1 };

 

  //--------------------

  //On indique ou sont les information et ce qui nous interesse
  const animalSlug = useSelector((state) => state.animal.SlugFiche);
  const data = { ...animalSlug };
  console.log("l url =>", name);
  console.log ("le slugfiche ", data.name);
  const Location0 = { ...data.locations }[0];
  const Location1 = { ...data.locations }[1];
  const Location2 = { ...data.locations }[2];
  const Location3 = { ...data.locations }[3];
  const Location4 = { ...data.locations }[4];
  const Location5 = { ...data.locations }[5];
  const Location6 = { ...data.locations }[6];
  const Location7 = { ...data.locations }[7];
  const Location8 = { ...data.locations }[8];
  const Location9 = { ...data.locations }[9];
  const Location10 = { ...data.locations }[10];
  const Location11 = { ...data.locations }[11];
  //On vient cibler l'objet taxonomy
  const taxonomy0 = { ...data.taxonomy };
    //On vient cibler l'objet taxonomy On veut passer en block les infos contenu dedans 
  const characteristics0 = { ...data.characteristics };


  // console.log('location une : ',locations[0][0]);
  // console.log('type : ', typeof locations);
  // const arrayDeLocation = [{...locations}];
  // console.log('spread de locations : ', arrayDeLocation);
  // console.log('type : ', typeof locations);
  // console.log('test de location', test.animalSlug);
  // const { locations } = animalSlug;
  // console.log (locations);
  // console.log('test DataTransfer', animalSlug);
  //console.log('les keys =>', Object.keys(animalSlug));
  //console.log("les values", Object.values(animalSlug));
  //console.log('les entries', Object.entries(animalSlug));


// Ce useeffect doit gerer l'affichage des infos animals => display none/flex
useEffect (() => {

  {/* ******************** Le slogan ****************** */}
    const sloganDiv = document.querySelector(".description-animal");
  if (characteristics0.slogan !== undefined) {
    sloganDiv.style.display = "flex";
  } else {
    sloganDiv.style.display = "none";
  }

 {/* ******************** Le Group_behavior ****************** */}
    const Group_behaviorDiv = document.querySelector(".Group_behavior");
  if (characteristics0.group_behavior !== undefined) {
    Group_behaviorDiv.style.display = "flex";
  } else {
    Group_behaviorDiv.style.display = "none";
  }
  
   {/* ******************** Le habitat ****************** */}
   const habitatDiv = document.querySelector(".habitat");
   if (characteristics0.habitat !== undefined) {
    habitatDiv.style.display = "flex";
   } else {
    habitatDiv.style.display = "none";
   }

{/* ******************** Le vitesse ****************** */}
const top_speedDiv = document.querySelector(".top_speed");
if (characteristics0.top_speed !== undefined) {
  top_speedDiv.style.display = "flex";
} else {
  top_speedDiv.style.display = "none";
}

{/* ******************** Le lifestyle ****************** */}
const lifestyleDiv = document.querySelector(".lifestyle");
if (characteristics0.lifestyle !== undefined) {
  lifestyleDiv.style.display = "flex";
} else {
  lifestyleDiv.style.display = "none";
}

{/* ******************** Le lifespan ****************** */}
const lifespanDiv = document.querySelector(".lifespan");
if (characteristics0.lifespan !== undefined) {
  lifespanDiv.style.display = "flex";
} else {
  lifespanDiv.style.display = "none";
}

{/* ******************** Le Estimated_population_size ****************** */}
const estimated_population_sizeDiv = document.querySelector(".estimated_population_size");
if (characteristics0.estimated_population_size !== undefined) {
  estimated_population_sizeDiv.style.display = "flex";
} else {
  estimated_population_sizeDiv.style.display = "none";
}

{/* ******************** Le Location ****************** */}
const LocationDiv = document.querySelector(".location");
if (characteristics0.location !== undefined) {
  LocationDiv.style.display = "flex";
} else {
  LocationDiv.style.display = "none";
}

{/* ******************** Le Most_distinctive_feature ****************** */}
const Most_distinctive_featureDiv = document.querySelector(".most_distinctive_feature");
if (characteristics0.most_distinctive_feature !== undefined) {
  Most_distinctive_featureDiv.style.display = "flex";
} else {
  Most_distinctive_featureDiv.style.display = "none";
}

{/* ******************** Le group ****************** */}
const groupDiv = document.querySelector(".group");
if (characteristics0.group !== undefined) {
  groupDiv.style.display = "flex";
} else {
  groupDiv.style.display = "none";
}

{/*        *********************************************************************************     */}

{/* ******************** Le Class ****************** */}
const classDiv = document.querySelector(".class");
if (taxonomy0.class !== undefined) {
  classDiv.style.display = "flex";
} else {
  classDiv.style.display = "none";
}

{/* ******************** Le family ****************** */}
const familyDiv = document.querySelector(".family");
if (taxonomy0.family !== undefined) {
  familyDiv.style.display = "flex";
} else {
  familyDiv.style.display = "none";
}

{/* ******************** Le genus ****************** */}
const genusDiv = document.querySelector(".genus");
if (taxonomy0.genus !== undefined) {
  genusDiv.style.display = "flex";
} else {
  genusDiv.style.display = "none";
}

{/* ******************** Le kingdom ****************** */}
const kingdomDiv = document.querySelector(".kingdom");
if (taxonomy0.kingdom !== undefined) {
  kingdomDiv.style.display = "flex";
} else {
  kingdomDiv.style.display = "none";
}

{/* ******************** Le order ****************** */}
const orderDiv = document.querySelector(".order");
if (taxonomy0.order !== undefined) {
  orderDiv.style.display = "flex";
} else {
  orderDiv.style.display = "none";
}

{/* ******************** Le phylum ****************** */}
const phylumDiv = document.querySelector(".phylum");
if (taxonomy0.phylum !== undefined) {
  phylumDiv.style.display = "flex";
} else {
  phylumDiv.style.display = "none";
}

{/* ******************** Le scientific_name ****************** */}
const scientific_nameDiv = document.querySelector(".scientific_name");
if (taxonomy0.scientific_name !== undefined) {
  scientific_nameDiv.style.display = "flex";
} else {
  scientific_nameDiv.style.display = "none";
}

{/*        *********************************************************************************     */}

{/* ******************** Le color ****************** */}
const colorDiv = document.querySelector(".color");
if (characteristics0.color !== undefined) {
  colorDiv.style.display = "flex";
} else {
  colorDiv.style.display = "none";
}

{/* ******************** Le height ****************** */}
const heightDiv = document.querySelector(".height");
if (characteristics0.height !== undefined) {
  heightDiv.style.display = "flex";
} else {
  heightDiv.style.display = "none";
}

{/* ******************** Le length ****************** */}
const lengthDiv = document.querySelector(".length");
if (characteristics0.length !== undefined) {
  lengthDiv.style.display = "flex";
} else {
  lengthDiv.style.display = "none";
}

{/* ******************** Le weight ****************** */}
const weightDiv = document.querySelector(".weight");
if (characteristics0.weight !== undefined) {
  weightDiv.style.display = "flex";
} else {
  weightDiv.style.display = "none";
}

{/* ******************** Le skin_type ****************** */}
const skin_typeDiv = document.querySelector(".skin_type");
if (characteristics0.skin_type !== undefined) {
  skin_typeDiv.style.display = "flex";
} else {
  skin_typeDiv.style.display = "none";
}

{/*        *********************************************************************************     */}


{/* ******************** Le Location0 ****************** */}

const Location0Div = document.querySelector(".Location0");
if (Location0 !== undefined) {
  Location0Div.style.display = "flex";
} else {
  Location0Div.style.display = "none";
}


{/* ******************** Le water_type ****************** */}
const water_typeDiv = document.querySelector(".water_type");
if (characteristics0.water_type !== undefined) {
  water_typeDiv.style.display = "flex";
} else {
  water_typeDiv.style.display = "none";
}
{/* ******************** Le optimum_ph_level ****************** */}
const optimum_ph_levelDiv = document.querySelector(".optimum_ph_level");
if (characteristics0.optimum_ph_level !== undefined) {
  optimum_ph_levelDiv.style.display = "flex";
} else {
  optimum_ph_levelDiv.style.display = "none";
}

{/*        *********************************************************************************     */}

{/* ******************** Le age_of_sexual_maturity ****************** */}
const age_of_sexual_maturityDiv = document.querySelector(".age_of_sexual_maturity");
if (characteristics0.age_of_sexual_maturity !== undefined) {
  age_of_sexual_maturityDiv.style.display = "flex";
} else {
  age_of_sexual_maturityDiv.style.display = "none";
}
{/* ******************** Le gestation_period ****************** */}
const gestation_periodDiv = document.querySelector(".gestation_period");
if (characteristics0.gestation_period !== undefined) {
  gestation_periodDiv.style.display = "flex";
} else {
  gestation_periodDiv.style.display = "none";
}

{/* ******************** Le age_of_weaning ****************** */}
const age_of_weaningDiv = document.querySelector(".age_of_weaning");
if (characteristics0.age_of_weaning !== undefined) {
  age_of_weaningDiv.style.display = "flex";
} else {
  age_of_weaningDiv.style.display = "none";
}


{/* ******************** Le name_of_young ****************** */}
const name_of_youngDiv = document.querySelector(".name_of_young");
if (characteristics0.name_of_young !== undefined) {
  name_of_youngDiv.style.display = "flex";
} else {
  name_of_youngDiv.style.display = "none";
}

{/*        *********************************************************************************     */}

{/* ******************** Le diet ****************** */}
const dietDiv = document.querySelector(".diet");
if (characteristics0.diet !== undefined) {
  dietDiv.style.display = "flex";
} else {
  dietDiv.style.display = "none";
}

{/* ******************** Le favorite_food ****************** */}
const favorite_foodDiv = document.querySelector(".favorite_food");
if (characteristics0.favorite_food !== undefined) {
  favorite_foodDiv.style.display = "flex";
} else {
  favorite_foodDiv.style.display = "none";
}

{/* ******************** Le biggest_threat ****************** */}
const biggest_threatDiv = document.querySelector(".biggest_threat");
if (characteristics0.biggest_threat !== undefined) {
  biggest_threatDiv.style.display = "flex";
} else {
  biggest_threatDiv.style.display = "none";
}

{/* ******************** Le predators ****************** */}
const predatorsDiv = document.querySelector(".predators");
if (characteristics0.predators !== undefined) {
  predatorsDiv.style.display = "flex";
} else {
  predatorsDiv.style.display = "none";
}

{/* ******************** Le prey ****************** */}
const preyDiv = document.querySelector(".prey");
if (characteristics0.prey !== undefined) {
  preyDiv.style.display = "flex";
} else {
  preyDiv.style.display = "none";
}

{/* ******************** Le main_prey ****************** */}
const main_preyDiv = document.querySelector(".main_prey");
if (characteristics0.main_prey !== undefined) {
  main_preyDiv.style.display = "flex";
} else {
  main_preyDiv.style.display = "none";
}



{/*        *********************************************************************************     */}

{/* ******************** Le temperament ****************** */}
const temperamentDiv = document.querySelector(".temperament");
if (characteristics0.temperament !== undefined) {
  temperamentDiv.style.display = "flex";
} else {
  temperamentDiv.style.display = "none";
}

{/* ******************** Le training ****************** */}
const trainingDiv = document.querySelector(".training");
if (characteristics0.training !== undefined) {
  trainingDiv.style.display = "flex";
} else {
  trainingDiv.style.display = "none";
}

{/* ******************** La div education ****************** */}
const educationDiv = document.querySelector(".contener-education");
if (characteristics0.training !== undefined && characteristics0.temperament !== undefined) {
  educationDiv.style.display = "flex";
} else {
  educationDiv.style.display = "none";
}

//!on est en train de checker la ternaire
const loadingImg = document.querySelector(".loadingImg");
const ficheAnimal = document.querySelector(".contener-main");

 data.name !== name ?  ficheAnimal.style.display = "none"  : loadingImg.style.display = "block"  ;
 data.name == name ?  ficheAnimal.style.display = "block"  : loadingImg.style.display = "none"  ;


{/* ******************** On verifie si il y a une img ****************** */}

const img = document.querySelector(".picture-animal");
const imgCat = document.querySelector(".picture-boss");
photoPicture.largeImageURL = undefined ? imgCat.style.display = "block" : imgCat.style.display = "none";
photoPicture.largeImageURL != undefined ? img.style.display = "block" : img.style.display = "none";

photoPicture.largeImageURL = undefined ? console.log('on affiche le chat') : console.log('on cache l\'animal');
photoPicture.largeImageURL != undefined ? console.log('on cache le chat') : console.log('on affiche l\'animal');

})

 // ---------------------le composant--------------------------------



  return (
    <div>
      <img className="loadingImg" src={ loading }/>
      <div className="contener-main">
        <div className="contener-fiche">
          <div className="contener-picture">
          <h1 className="Titre-name"> {name}</h1>
            {/* l'image du l'animal*/}
            {/*photoPicture.previewURL */}
            <img
              className="picture-animal"
              src={ photoPicture.largeImageURL }
              alt="animal picture"
            />
            <img
              className="picture-boss"
              src={ theBoss }
              alt="animal-cat"
            />
            
            {/****description******* */}
            <p className="description-animal"> {characteristics0.slogan}</p>
          </div>
          <div className="Contener-infos">
            <div className="contener-modeDeVie contener-generique">
              {/****mode de vie******* */}
              <h1 className="titre-modeDeVie titre-generique">Mode de vie</h1>
              <div className="wrapper-info">
                <div className="Info-generique Group_behavior">
                  <p className="titre-info">Group behavior</p>
                  <p className="dataToGet">{characteristics0.group_behavior}
                  </p>
                </div>
                <div className="Info-generique habitat">
                  <p className="titre-info">Habitat</p>
                  <p className="dataToGet"> {characteristics0.habitat}</p>
                </div>

                <div className="Info-generique top_speed">
                  <p className="titre-info">Top_speed</p>
                  <p className="dataToGet"> {characteristics0.top_speed}</p>
                </div>
                
                <div className="Info-generique lifestyle">
                  <p className="titre-info">Lifestyle</p>
                  <p className="dataToGet"> {characteristics0.lifestyle}</p>
                </div>
                <div className="Info-generique lifespan">
                  <p className="titre-info">Lifespan</p>
                  <p className="dataToGet"> {characteristics0.lifespan}</p>
                </div>
                <div className="Info-generique estimated_population_size">
                  <p className="titre-info">Estimated_population_size</p>
                  <p className="dataToGet"> {characteristics0.estimated_population_size}
                  </p>
                </div>
                <div className="Info-generique location">
                  <p className="titre-info">Location</p>
                  <p className="dataToGet"> {characteristics0.location}</p>
                </div>
                <div className="Info-generique most_distinctive_feature">
                  <p className="titre-info">Most_distinctive_feature</p>
                  <p className="dataToGet">{characteristics0.most_distinctive_feature}
                  </p>
                </div>

                <div className="Info-generique group">
                  <p className="titre-info">Group</p>
                  <p className="dataToGet">{characteristics0.group}
                  </p>
                </div>

              </div>
            </div>

            <div className="contener-classification contener-generique">
              {/****Classification******* */}
              <h1 className="titre-Classification titre-generique">
                Classification
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique class">
                  <p className="titre-info">Class</p>
                  <p className="dataToGet"> {taxonomy0.class}</p>
                </div>
                <div className="Info-generique family">
                  <p className="titre-info">Family</p>
                  <p className="dataToGet"> {taxonomy0.family}</p>
                </div>
                <div className="Info-generique genus">
                  <p className="titre-info">Genus</p>
                  <p className="dataToGet"> {taxonomy0.genus}</p>
                </div>
                <div className="Info-generique kingdom">
                  <p className="titre-info">Kingdom</p>
                  <p className="dataToGet"> {taxonomy0.kingdom}</p>
                </div>
                <div className="Info-generique order">
                  <p className="titre-info">Order</p>
                  <p className="dataToGet"> {taxonomy0.order}</p>
                </div>
                <div className="Info-generique phylum">
                  <p className="titre-info">Phylum</p>
                  <p className="dataToGet"> {taxonomy0.phylum}</p>
                </div>
                <div className="Info-generique scientific_name">
                  <p className="titre-info">Scientific name</p>
                  <p className="dataToGet"> {taxonomy0.scientific_name}</p>
                </div>
              </div>
            </div>

            <div className="contener-corps contener-generique">
              {/****Corps******* */}
              <h1 className="titre-Corps titre-generique">Corps</h1>
              <div className="wrapper-info">
                <div className="Info-generique color">
                  <p className="titre-info">Color</p>
                  <p className="dataToGet"> {characteristics0.color}</p>
                </div>
                <div className="Info-generique height">
                  <p className="titre-info">Height</p>
                  <p className="dataToGet"> {characteristics0.height}</p>
                </div>
                <div className="Info-generique length">
                  <p className="titre-info">Length</p>
                  <p className="dataToGet"> {characteristics0.length}</p>
                </div>
                <div className="Info-generique weight">
                  <p className="titre-info">Weight</p>
                  <p className="dataToGet"> {characteristics0.weight}</p>
                </div>
                <div className="Info-generique skin_type">
                  <p className="titre-info">Skin type</p>
                  <p className="dataToGet"> {characteristics0.skin_type}</p>
                </div>
              </div>
            </div>

            <div className="contener-enviromenent contener-generique">
              {/****enviroment******* */}
              <h1 className="titre-environnement titre-generique">
                Environnement
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique Location0">
                  <p className="titre-info">Location</p>
                  <p className="dataToGet">  {Location0}  {Location1}  {Location2}  {Location3}  {Location4}  {Location5}  {Location6}  {Location7}  {Location8}  {Location9}  {Location10}  {Location11} 
                  </p>
                </div>
                <div className="Info-generique water_type">
                  <p className="titre-info">Water type</p>
                  <p className="dataToGet"> {characteristics0.water_type}</p>
                </div>
                <div className="Info-generique optimum_ph_level">
                  <p className="titre-info">Optimum ph level</p>
                  <p className="dataToGet"> {characteristics0.optimum_ph_level}
                  </p>
                </div>
              </div>
            </div>

            <div className="contener-reproduction contener-generique">
              {/****Reproduction******* */}
              <h1 className="titre-reproduction titre-generique">
                Reproduction
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique age_of_sexual_maturity">
                  <p className="titre-info">Age of sexual maturity</p>
                  <p className="dataToGet"> {characteristics0.age_of_sexual_maturity}
                  </p>
                </div>
                <div className="Info-generique gestation_period">
                  <p className="titre-info">Gestation period</p>
                  <p className="dataToGet"> {characteristics0.gestation_period}
                  </p>
                </div>
                <div className="Info-generique age_of_weaning">
                  <p className="titre-info">Age of weaning</p>
                  <p className="dataToGet"> {characteristics0.age_of_weaning}
                  </p>
                </div>
                <div className="Info-generique name_of_young">
                  <p className="titre-info">Name of young</p>
                  <p className="dataToGet"> {characteristics0.name_of_young}</p>
                </div>
              </div>
            </div>

            <div className="contener-alimentaire contener-generique">
              {/****regime alimentaire******* */}
              <h1 className="titre-régimeAlimentaire titre-generique">
                Régime alimentaire
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique diet">
                  <p className="titre-info">Diet</p>
                  <p className="dataToGet"> {characteristics0.diet}</p>
                </div>
                <div className="Info-generique favorite_food">
                  <p className="titre-info">Favorite food</p>
                  <p className="dataToGet"> {characteristics0.favorite_food}</p>
                </div>
                <div className="Info-generique biggest_threat">
                  <p className="titre-info">Biggest threat</p>
                  <p className="dataToGet"> {characteristics0.biggest_threat}
                  </p>
                </div>
                <div className="Info-generique predators">
                  <p className="titre-info">Predators</p>
                  <p className="dataToGet"> {characteristics0.predators}</p>
                </div>
                <div className="Info-generique prey">
                  <p className="titre-info">Prey</p>
                  <p className="dataToGet"> {characteristics0.prey}</p>
                </div>
                <div className="Info-generique main_prey">
                  <p className="titre-info">Main prey</p>
                  <p className="dataToGet"> {characteristics0.main_prey}</p>
                </div>
              </div>
            </div>


            <div className="contener-education contener-generique">
              {/****regime alimentaire******* */}
              <h1 className="titre-régimeAlimentaire titre-generique">
                Education
              </h1>
              <div className="wrapper-info"></div>
            <div className="Info-generique training">
                  <p className="titre-info">Training</p>
                  <p className="dataToGet">{characteristics0.training}
                  </p>
                </div>

                <div className="Info-generique temperament">
                  <p className="titre-info">Temperament</p>
                  <p className="dataToGet">{characteristics0.temperament}
                  </p>
                </div>

              

            <div className="contener-none">
              <p> {characteristics0.average_clutch_size}</p>
              <p> {characteristics0.common_name}</p>
              <p> {characteristics0.litter_size}</p>
              <p> {characteristics0.number_of_species}</p>
              <p> {characteristics0.origin}</p>
              <p> {characteristics0.type}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheDetail;
