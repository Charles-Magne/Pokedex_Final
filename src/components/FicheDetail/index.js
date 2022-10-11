//les dépendances
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Les assets
import "./style.scss";
import face from "../../assets/pictures/face-a-face.jpg";

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

//!|| Attention, il vaut mieux faire un appel API lors du clic sur la card comme ca pas de contradition entre l'url et la vitesse de chargement du dom
//! V  Plutot utiliser les props et les stocker dans le stat
  useEffect(() => {
    // On veut recup un objet directement depuis l'API
    // Pour ça, on va dispatcher une action (émettre l'intention de charger les animaux)
    dispatch(fetchOneAnimal(name));
  }, []);

  const animalSlug = useSelector((state) => state.animal.SlugFiche);
  const data = {...animalSlug}
  const Location0 = {...data.locations}[0];
  const Location1 = { ...data.locations}[1];
  const Location2 = { ...data.locations}[2];
  const taxonomy0 = {...data.taxonomy};
  const characteristics0 = {...data.characteristics};

  console.log('test DataTransfer', {...animalSlug}); //OK Generale
  console.log('test DataTransfer1', {...data.locations}[0]  ); //OK 
  console.log('test DataTransfer2', {...data.characteristics}  ); //OK 


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

  return(
    <div>
      <Header/>
      <div className='contener-main' >
      <h1 className='Titre-name' > {name}</h1>
      <img className='picture-animal' src={face} alt="animal picture" /> {/* l'iamge du l'animal*/}
      <p> {Location0} </p>
      <p> {Location1} </p>
      <p> {Location2} </p>

      <p> { taxonomy0.class }</p>
      <p> { taxonomy0.family }</p>
      <p> { taxonomy0.genus }</p>
      <p> { taxonomy0.kingdom }</p>
      <p> { taxonomy0.order }</p>
      <p> { taxonomy0.phylum }</p>
      <p> { taxonomy0.scientific_name }</p>

      {/****Corps******* */}
      <p> { characteristics0.color }</p>
      <p> { characteristics0.height }</p>
      <p> { characteristics0.length }</p>
      <p> { characteristics0.weight }</p>
      <p> { characteristics0.skin_type }</p>

      {/****enviroment******* */}
      <p> { characteristics0.water_type }</p>

      {/****Reproduction******* */}
      <p> { characteristics0.age_of_sexual_maturity }</p>
      <p> { characteristics0.gestation_period }</p>
      <p> { characteristics0.age_of_weaning }</p>
      <p> { characteristics0.name_of_young }</p>

      {/****regime alimentaire******* */}
      <p> { characteristics0.diet }</p>
      <p> { characteristics0.favorite_food }</p>
      <p> { characteristics0.biggest_threat }</p>
      <p> { characteristics0.predators }</p>
      <p> { characteristics0.prey }</p>
      <p> { characteristics0.main_prey }</p>

      {/****description******* */}
      <p> { characteristics0.slogan }</p>

      {/****mode de vie******* */}
      <p> { characteristics0.group_behavior }</p>
      <p> { characteristics0.habitat }</p>
      <p> { characteristics0.optimum_ph_level }</p>
      <p> { characteristics0.top_speed }</p>
      <p> { characteristics0.lifestyle }</p>
      <p> { characteristics0.lifespan }</p>
      <p> { characteristics0.estimated_population_size }</p>
      <p> { characteristics0.location }</p>
      <p> { characteristics0.most_distinctive_feature }</p>

      



      <p> { characteristics0.average_clutch_size }</p>
      
      
      <p> { characteristics0.common_name }</p>
      <p> { characteristics0.litter_size }</p>
      
      <p> { characteristics0.number_of_species }</p>
      
      <p> { characteristics0.origin }</p>
      <p> { characteristics0.type }</p>
      

      </div>
    </div>
  );
}


export default FicheDetail;
